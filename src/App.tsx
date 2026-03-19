import { HydraAdmin } from "@api-platform/admin";
import { Resource } from "react-admin";
import polyglotI18nProvider from "ra-i18n-polyglot";
import englishMessages from "ra-language-english";
import { MyLayout } from "./MyLayout";
import { lightTheme } from "./theme";
import { Introduction } from "./Introduction";
import { ProteinList } from "./proteins";

const i18nProvider = polyglotI18nProvider(() => englishMessages, "en-GB");

export const App = () => (
    <HydraAdmin
        entrypoint="https://mdd.ibb.waw.pl/api"
        layout={MyLayout}
        theme={lightTheme}
        dashboard={Introduction}
        i18nProvider={i18nProvider}
    >
        <Resource name="proteins" list={ProteinList} />
    </HydraAdmin>
);
