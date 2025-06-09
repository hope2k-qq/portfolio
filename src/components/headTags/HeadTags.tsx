import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

const HeadTags = () => {
    const { t, i18n } = useTranslation();

    return (
        <Helmet>
            <html lang={i18n.language} />
            <title>{t("meta_title")}</title>
            <meta name="description" content={t("meta_description")} />

            <meta property="og:title" content={t("og_title")}/>
            <meta property="og:description" content={t("og_description")}/>

            <meta name="twitter:title" content={t("og_title")}/>
            <meta name="twitter:description" content={t("og_description")}/>
        </Helmet>
    );
};

export default HeadTags;
