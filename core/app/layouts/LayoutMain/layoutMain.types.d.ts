import { TThemeMode } from '@app/ui/styles/theme.context';

// Context

export type TSetAction<T = boolean> = (state: T | ((prevState: T) => T)) => void

export type TNavbarTypes = 'sticky' | 'hidden' |'static'

export type TThemeConfig = {
    navbar: {
        type: TNavbarTypes;
        color: string;
    };
    currentTheme: 'light' | 'dark';
    primaryColor: any,
    menuLayout?: string
}

export type TLayoutContext = {
  isOpenAside: boolean;
  isAnchorAside: boolean;
  isHiddenAside: boolean;
  isOpenAsideThemeCustomizer: boolean;
  setOpenAside: TSetAction
  setHiddenAside: TSetAction
  setAnchorAside: TSetAction
  setAsideThemeCustomizer: TSetAction
  handleThemeConfig: TSetAction<TThemeConfig>
  themeConfig: TThemeConfig
  keyTheme: TThemeMode
}

// Styled
export type TLayoutMainWrapper = {
    isAnchorAside: boolean
    isHiddenAside: boolean
}

export type THeaderSection = {
    navBarType: TNavbarTypes

}
