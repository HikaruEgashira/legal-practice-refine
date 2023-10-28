import {
  notificationProvider,
  RefineThemes,
  ThemedLayoutV2,
  ThemedTitleV2,
} from "@refinedev/chakra-ui";
import { Refine } from "@refinedev/core";
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";
import routerProvider, { DocumentTitleHandler } from "@refinedev/nextjs-router";
import type { NextPage } from "next";
import { AppProps } from "next/app";

import { ChakraProvider } from "@chakra-ui/react";
import { Header } from "@components/header";
// import dataProvider from "@refinedev/simple-rest";
import {dataProvider} from "../src/data-provider";
import { appWithTranslation, useTranslation } from "next-i18next";
import { AppIcon } from "src/components/app-icon";

const API_URL = "https://api.fake-rest.refine.dev";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  noLayout?: boolean;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout): JSX.Element {
  const renderComponent = () => {
    if (Component.noLayout) {
      return <Component {...pageProps} />;
    }

    return (
      <ThemedLayoutV2
        Header={() => <Header sticky />}
        Title={({ collapsed }) => (
          <ThemedTitleV2
            collapsed={collapsed}
            text="法令API"
            icon={<AppIcon />}
          />
        )}
      >
        <Component {...pageProps} />
      </ThemedLayoutV2>
    );
  };

  const { t, i18n } = useTranslation();

  const i18nProvider = {
    translate: (key: string, params: object) => t(key, params),
    changeLocale: (lang: string) => i18n.changeLanguage(lang),
    getLocale: () => i18n.language,
  };

  return (
    <>
      {/* <GitHubBanner /> */}
      {/* <RefineKbarProvider actions={[]}> */}
      {/* You can change the theme colors here. example: theme={RefineThemes.Magenta} */}
      <ChakraProvider theme={RefineThemes.Green}>
        <DevtoolsProvider>
          <Refine
            routerProvider={routerProvider}
            dataProvider={dataProvider as any} 
            notificationProvider={notificationProvider}
            i18nProvider={i18nProvider}
            resources={[
              {
                name: "law",
                list: "/law",
                show: "/law/show/:id"
              },
            ]}
            options={{
              syncWithLocation: true,
              warnWhenUnsavedChanges: true,
              projectId: "JfZfzy-GTXWBF-xr1ejP",
            }}
          >
            {renderComponent()}
            {/* <RefineKbar /> */}
            {/* <UnsavedChangesNotifier /> */}
            <DocumentTitleHandler />
          </Refine>
          <DevtoolsPanel />
        </DevtoolsProvider>
      </ChakraProvider>
      {/* </RefineKbarProvider> */}
    </>
  );
}

export default appWithTranslation(MyApp);
