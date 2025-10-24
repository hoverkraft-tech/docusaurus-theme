import React from "react";
import {
  HoverkraftHero,
  HoverkraftButton,
  HoverkraftBrandHighlight,
  HoverkraftFeatureList,
  HoverkraftProjectCard,
} from "@hoverkraft/docusaurus-theme/components";

// Add react-live imports you need here
const ReactLiveScope: unknown = {
  React,
  ...React,
  HoverkraftButton,
  HoverkraftHero,
  HoverkraftBrandHighlight,
  HoverkraftFeatureList,
  HoverkraftProjectCard,
};

export default ReactLiveScope;
