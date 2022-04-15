// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qv6zis9xDhh6tqcrgni3fx
// Component: TyeYjWzjjRVnC
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import IconLink from "../../IconLink"; // plasmic-import: Jfnq8P-EMU09r/component
import TextInput from "../../TextInput"; // plasmic-import: AmXlPrebXG0U_l/component
import Button from "../../Button"; // plasmic-import: wcLr5_2PVsVByX/component

import { useScreenVariants as useScreenVariants_9IzRl7Ttvrws2S } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: 9IzRl7ttvrws2s/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import projectcss from "./plasmic_slideshow_test.module.css"; // plasmic-import: qv6zis9xDhh6tqcrgni3fx/projectcss
import sty from "./PlasmicFooter.module.css"; // plasmic-import: TyeYjWzjjRVnC/css

import LogoIcon from "./icons/PlasmicIcon__Logo"; // plasmic-import: xUsbfGrCrJYcyB/icon
import SearchsvgIcon from "./icons/PlasmicIcon__Searchsvg"; // plasmic-import: GmEkM4_vQTPLgP/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: ZFUQNXPowE13hc/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: 9_4SYWr-20UnXe/icon
import TwitterIconIcon from "./icons/PlasmicIcon__TwitterIcon"; // plasmic-import: 0XpSt9GAwBp5bp/icon
import GithubIconIcon from "./icons/PlasmicIcon__GithubIcon"; // plasmic-import: NBX_rdvJxj_AXH/icon
import FacebookIconIcon from "./icons/PlasmicIcon__FacebookIcon"; // plasmic-import: 5OO2rGVmZqad43/icon

export type PlasmicFooter__VariantMembers = {};

export type PlasmicFooter__VariantsArgs = {};
type VariantPropType = keyof PlasmicFooter__VariantsArgs;
export const PlasmicFooter__VariantProps = new Array<VariantPropType>();

export type PlasmicFooter__ArgsType = {};
type ArgPropType = keyof PlasmicFooter__ArgsType;
export const PlasmicFooter__ArgProps = new Array<ArgPropType>();

export type PlasmicFooter__OverridesType = {
  root?: p.Flex<"div">;
  textInput?: p.Flex<typeof TextInput>;
  button?: p.Flex<typeof Button>;
  textbox?: p.Flex<typeof TextInput>;
};

export interface DefaultFooterProps {
  className?: string;
}

function PlasmicFooter__RenderFunc(props: {
  variants: PlasmicFooter__VariantsArgs;
  args: PlasmicFooter__ArgsType;
  overrides: PlasmicFooter__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;
  const $props = props.args;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants_9IzRl7Ttvrws2S()
  });

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_library_plasmic_color_type_css.plasmic_tokens,
        sty.root
      )}
    >
      <div className={classNames(projectcss.all, sty.freeBox__hU5Q)} />

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__rzTkG)}
      >
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__xxjcp)}
        >
          <IconLink
            className={classNames("__wab_instance", sty.iconLink__eFNiv)}
            icon={
              <LogoIcon
                className={classNames(projectcss.all, sty.svg__f8Sin)}
                role={"img"}
              />
            }
          />

          <div className={classNames(projectcss.all, sty.freeBox__g4Rz5)}>
            <p.PlasmicLink
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__dCnjP
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"Terms"}
            </p.PlasmicLink>

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___8AHuc
              )}
            >
              {" · "}
            </div>

            <p.PlasmicLink
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__vMBt
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"Privacy"}
            </p.PlasmicLink>
          </div>
        </p.Stack>

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__k2Knt)}
        >
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__vCQzH)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__gsSi5
              )}
            >
              {"Products"}
            </div>

            <p.PlasmicLink
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__a3LsV
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"Web Studio"}
            </p.PlasmicLink>

            <p.PlasmicLink
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__jmbzd
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"DynamicBox Flex"}
            </p.PlasmicLink>

            <p.PlasmicLink
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link___3Bpv
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"Programming Forms"}
            </p.PlasmicLink>

            <p.PlasmicLink
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__zhosZ
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"Integrations"}
            </p.PlasmicLink>

            <p.PlasmicLink
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link___3Kf4K
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"Command-line"}
            </p.PlasmicLink>
          </p.Stack>

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__ts9CR)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__xDwt9
              )}
            >
              {"Resources"}
            </div>

            <p.PlasmicLink
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__vmcYk
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"Documentation"}
            </p.PlasmicLink>

            <p.PlasmicLink
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__zHNfr
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"Tutorials & Guides"}
            </p.PlasmicLink>

            <p.PlasmicLink
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__r9A3H
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"Blog"}
            </p.PlasmicLink>

            <p.PlasmicLink
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__uujz9
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"Support Center"}
            </p.PlasmicLink>

            <p.PlasmicLink
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__qodiG
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"Partners"}
            </p.PlasmicLink>
          </p.Stack>

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__o0FrI)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__zvEpJ
              )}
            >
              {"Company"}
            </div>

            <p.PlasmicLink
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__coBbL
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"Home"}
            </p.PlasmicLink>

            <p.PlasmicLink
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__xGg0K
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"About us"}
            </p.PlasmicLink>

            <p.PlasmicLink
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__wzpD2
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"Company values"}
            </p.PlasmicLink>

            <p.PlasmicLink
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link___1XB7J
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"Pricing"}
            </p.PlasmicLink>

            <p.PlasmicLink
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__zTIeR
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"Privacy policy"}
            </p.PlasmicLink>
          </p.Stack>

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox___62Bpe)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__gBth
              )}
            >
              {"Subscribe"}
            </div>

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___9HbuA
              )}
            >
              {"Get the latest news and articles to your inbox every month."}
            </div>

            <TextInput
              data-plasmic-name={"textInput"}
              data-plasmic-override={overrides.textInput}
              className={classNames("__wab_instance", sty.textInput)}
              endIcon={
                <Button
                  data-plasmic-name={"button"}
                  data-plasmic-override={overrides.button}
                  className={classNames("__wab_instance", sty.button)}
                  color={"clear" as const}
                  size={"compact" as const}
                  startIcon={
                    <IconIcon
                      className={classNames(projectcss.all, sty.svg__kBivG)}
                      role={"img"}
                    />
                  }
                >
                  <IconIcon
                    className={classNames(projectcss.all, sty.svg__kNuR)}
                    role={"img"}
                  />
                </Button>
              }
              fontSize={"small" as const}
              placeholder={"Your email" as const}
              showEndIcon={true}
            />
          </p.Stack>
        </p.Stack>
      </p.Stack>

      <div className={classNames(projectcss.all, sty.freeBox__vOExt)} />

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__teh3)}
      >
        <div className={classNames(projectcss.all, sty.freeBox__ewmNz)}>
          <p.PlasmicLink
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link__pDfjf
            )}
            component={Link}
            href={"https://cruip.com/" as const}
            platform={"nextjs"}
          >
            {"Designed by Cruip. "}
          </p.PlasmicLink>

          <p.PlasmicLink
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link__c8Tmm
            )}
            component={Link}
            href={"https://www.plasmic.app/" as const}
            platform={"nextjs"}
          >
            {"Built in Plasmic. "}
          </p.PlasmicLink>

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__epiZb
            )}
          >
            {"All rights reserved."}
          </div>
        </div>

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__dZlbt)}
        >
          <IconLink
            className={classNames("__wab_instance", sty.iconLink__tJiEt)}
            icon={
              <TwitterIconIcon
                className={classNames(projectcss.all, sty.svg__i5EhP)}
                role={"img"}
              />
            }
          />

          <IconLink
            className={classNames("__wab_instance", sty.iconLink__m6Kyv)}
            icon={
              <GithubIconIcon
                className={classNames(projectcss.all, sty.svg__hjN40)}
                role={"img"}
              />
            }
          />

          <IconLink
            className={classNames("__wab_instance", sty.iconLink__kwfx0)}
            icon={
              <FacebookIconIcon
                className={classNames(projectcss.all, sty.svg___2HEjs)}
                role={"img"}
              />
            }
          />
        </p.Stack>
      </p.Stack>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "textInput", "textbox", "button"],
  textInput: ["textInput", "textbox", "button"],
  button: ["button"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  textInput: typeof TextInput;
  button: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFooter__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicFooter__VariantsArgs;
    args?: PlasmicFooter__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicFooter__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicFooter__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicFooter__ArgProps,
      internalVariantPropNames: PlasmicFooter__VariantProps
    });

    return PlasmicFooter__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFooter";
  } else {
    func.displayName = `PlasmicFooter.${nodeName}`;
  }
  return func;
}

export const PlasmicFooter = Object.assign(
  // Top-level PlasmicFooter renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    textInput: makeNodeComponent("textInput"),
    button: makeNodeComponent("button"),

    // Metadata about props expected for PlasmicFooter
    internalVariantProps: PlasmicFooter__VariantProps,
    internalArgProps: PlasmicFooter__ArgProps
  }
);

export default PlasmicFooter;
/* prettier-ignore-end */
