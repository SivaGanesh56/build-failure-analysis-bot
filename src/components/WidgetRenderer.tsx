/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ComponentType, Fragment } from "react";
import AuthorInfo from "./AuthorInfo";
import HeroBanner from "./HeroBanner";

const WIDGET_MAP = {
  authorInfo: AuthorInfo,
  heroBanner: HeroBanner,
} as const;

export type WidgetContentType = keyof typeof WIDGET_MAP;

export type Widget = {
  contentType: WidgetContentType;
  id: string;
};

const WidgetRenderer = ({ widgets }: { widgets: Widget[] }) => {
  return widgets.map((widget) => {
    const WidgetComponent = WIDGET_MAP[
      widget.contentType
    ] as ComponentType<any>;
    if (!WidgetComponent) return null;

    const comp = <WidgetComponent {...widget} />;

    return <Fragment key={widget.id}>{comp}</Fragment>;
  });
};

export default WidgetRenderer;
