type UseBaseUrlOptions = {
  forcePrependBaseUrl?: boolean;
  absolute?: boolean;
};

export default function useBaseUrl(targetUrl?: string, _options?: UseBaseUrlOptions): string {
  void _options;
  if (typeof targetUrl !== "string") {
    return "";
  }

  return targetUrl;
}
