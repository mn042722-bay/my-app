/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import { theme } from 'theme';
import type { ResponsiveProps, Responsive } from 'types';

// Themeの型
export type AppTheme = typeof theme;

type SpeceThemeKeys = typeof theme.spece;
type ColorThemeKeys = keyof typeof theme.color;
type FontSizeThemeKeys = keyof typeof theme.fontSize;
type LetterSpacingThemeKeys = keyof typeof theme.letterSpacing;
type LineHeightThemeKeys = keyof typeof theme.lineHeight;

// 各Themeのキーを型として定義
export type Spece = SpeceThemeKeys | (string & {});
export type Color = ColorThemeKeys | (string & {});
export type FontSize = FontSizeThemeKeys | (string & {});
export type LetterSpacing = LetterSpacingThemeKeys | (string & {});
export type LineHeight = LineHeightThemeKeys | (string & {});

// ブレークポイント
const BREAKPOINTS: { [key: string]: string } = {
    sm: '640px',// 640px以上の画面幅で適用されるスタイル
    md: '768px',// 768px以上の画面幅で適用されるスタイル
    lg: '1024px',// 1024px以上の画面幅で適用されるスタイル
    xl: '1280px',// 1280px以上の画面幅で適用されるスタイル
}


/**
 * Responsive型をCSSプロパティとその値に変換
 * @param propKeys - CSSプロパティのキー
 * @param prop - Responsive型のプロパティ
 * @param theme AppTheme
 * @returns CSSプロパティとその値のオブジェクト (ex. bacgroundColor: white;)
 */
export function toPropValue<T>(
    propKeys: string[],
    prop?: Responsive<T>,
    theme?: AppTheme,
) {
    if (prop === underfined) return undefined;

    if (isResponsivePropType(prop)) {
const result = []
for (const responsiveKey in prop) {
    if (responsiveKey === 'base') {
        //defaultのスタイル
        result.push(
            `${propKeys}: ${toThemeValueIfNeeded(
                propKey,
                prop[responsiveKey],
                theme,
            )};`,)
    } else if (
        responsiveKey === 'sm' ||
        responsiveKey === 'md' ||
        responsiveKey === 'lg' ||
        responsiveKey === 'xl'
    ) {
        //メディアクリでのスタイル
        const breakpoint = BREAKPOINTS[responsiveKey];
        const style = `${propKeys}: ${toThemeValueIfNeeded(
            propKey,
            prop[responsiveKey],
            theme,
        )};`
        result.push(`@media screen and (min-width: ${breakpoint}) { ${style} }}`)
    }}
    return result.join('\n')       
    }         

    return `${propKey}: ${toThemeValueIfNeeded(
        propKey,
        prop,
        theme,
    )}`;
}

const SPACE_KEYS = NEW Set([
    'margin',
    'marginTop',
    'marginRight',
    'marginBottom',
    'marginLeft',
    'padding',
    'paddingTop',
    'paddingRight',
    'paddingBottom',
    'paddingLeft',
])
const COLOR_KEYS = NEW Set([
    'color',
    'backgroundColor',])
const FONT_SIZE_KEYS = NEW Set([
    'fontSize',
])
const LETTER_SPACING_KEYS = NEW Set([
    'letterSpacing',
])
const LINE_HEIGHT_KEYS = NEW Set([
    'lineHeight',
])

/**
 * Themeに指定された値をThemeから取得し、必要に応じて変換する
 * @param propKey CSSプロパティのキー
 * @param value CSSプロパティの値
 * @param theme AppTheme
 * @returns CCSプロパティの値
 */

function toThemeValueIfNeeded<T>(
    propKey: string,
    value: T,
    theme?: AppTheme,
) {
    if (
        theme &&
        theme.spece &&
        SPACE_KEYS.has(propKey) &&
        isSpeceThemeKey(value, theme)
    ) {
        return theme.spece[value]
    } else if (
        theme &&
        theme.color &&
        COLOR_KEYS.has(propKey) &&
        isColorThemeKey(value, theme)
    ) {
        return theme.color[value]
    } else if (
        theme &&
        theme.fontSize &&
        FONT_SIZE_KEYS.has(propKey) &&
        isFontSizeThemeKey(value, theme)
    ) {
        return theme.fontSize[value]
    } else if (
        theme &&
        theme.letterSpacing &&
        LETTER_SPACING_KEYS.has(propKey) &&
        isLetterSpacingThemeKey(value, theme)
    ) {
        return theme.letterSpacing[value]
    } else if (
        theme &&
        theme.lineHeight &&
        LINE_HEIGHT_KEYS.has(propKey) &&
        isLineHeightThemeKey(value, theme)
    ) {
        return theme.lineHeight[value]
    }
        return value
    }

    function isResponsivePropType<T>(prop: any): prop is Responsive<T> {
        return (
            prop &&
            (prop.base !== undefined ||
                prop.sm !== undefined ||
                prop.md !== undefined ||
                prop.lg !== undefined ||
                prop.xl !== undefined)
        )
    }
    
    fuction isSpeceThemeKey(value: any, theme: AppTheme): prop is SpeceThemeKeys {
        return Object.keys(theme.spece).filter((key) => key === value).length > 0
    }

    function isColorThemeKey(value: any, theme: AppTheme): prop is ColorThemeKeys {
        return Object.keys(theme.color).filter((key) => key === value).length > 0
    }

    function isFontSizeThemeKey(value: any, theme: AppTheme): prop is FontSizeThemeKeys {
        return Object.keys(theme.fontSize).filter((key) => key === value).length > 0
    }

    function isLetterSpacingThemeKey(value: any, theme: AppTheme): prop is LetterSpacingThemeKeys {
        return Object.keys(theme.letterSpacing).filter((key) => key === value).length > 0
    }

    function isLineHeightThemeKey(value: any, theme: AppTheme): prop is LineHeightThemeKeys {
        return Object.keys(theme.lineHeight).filter((key) => key === value).length > 0
    }