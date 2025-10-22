import type { Joi } from "@docusaurus/utils-validation";
import type { ThemeConfig } from "../types";
import { DEFAULT_CONFIG, validateThemeConfig } from "../validateThemeConfig";

const runValidation = <T>(schema: Joi.Schema, value: T): T => {
  const result = schema.validate(value);
  if (result.error) {
    throw result.error;
  }
  return result.value as T;
};

describe("validateThemeConfig", () => {
  it("delegates validation to the provided validator and injects the Hoverkraft logo", () => {
    const validate = jest.fn(runValidation);
    const config: ThemeConfig = { hoverkraft: {} };

    const result = validateThemeConfig({ validate, themeConfig: config }) as unknown as Record<
      string,
      unknown
    >;

    expect(validate).toHaveBeenCalledWith(expect.anything(), config);
    const [schema] = validate.mock.calls[0];
    const { error, value } = (schema as Joi.Schema).validate(config);
    expect(error).toBeUndefined();
    expect(value).toEqual(config);

    // The theme forces the navbar logo to Hoverkraft branding
    expect(result).toHaveProperty("navbar");
    expect((result.navbar as Record<string, unknown>).logo).toEqual({
      alt: "Hoverkraft Logo",
      src: "img/logo.svg",
    });
  });

  it("allows unknown top-level fields (navbar etc.)", () => {
    const validate = jest.fn(runValidation);

    // Unknown fields should be permitted by the theme validation - they will be preserved
    expect(() =>
      validateThemeConfig({
        validate,
        themeConfig: { unexpected: true } as unknown as ThemeConfig,
      })
    ).not.toThrow();
  });

  it("bubbles up validation errors", () => {
    const failure = new Error("validation failed");
    const validate = jest.fn(() => {
      throw failure;
    });

    expect(() =>
      validateThemeConfig({
        validate,
        themeConfig: DEFAULT_CONFIG,
      })
    ).toThrow(failure);
  });
});

describe("DEFAULT_CONFIG", () => {
  it("provides an empty hoverkraft namespace", () => {
    expect(DEFAULT_CONFIG).toEqual({ hoverkraft: {} });
  });
});
