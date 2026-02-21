import { SectionDef, ConfigValues } from "./types";

export const configSchema: SectionDef[] = [
  {
    id: "app",
    label: "App",
    separatorKey: "______________APP______________",
    separatorValue: "API Parameters",
    fields: [
      { key: "AppName", type: "string" },
      { key: "UserSessionTimeout", type: "number" },
    ],
  },
  {
    id: "api",
    label: "API Parameters",
    separatorKey: "______________API______________",
    separatorValue: "API Parameters",
    fields: [
      { key: "RootApiUrl", type: "string" },
      { key: "Origin", type: "string" },
      { key: "SystemStatusURL", type: "string" },
    ],
  },
  {
    id: "design",
    label: "Design",
    separatorKey: "______________DESIGN______________",
    separatorValue: "Design Parameters",
    fields: [
      { key: "BrandColor", type: "color" },
      { key: "ButtonBackgroundColor", type: "color" },
      { key: "ButtonTextColor", type: "color" },
      { key: "BadgesColors", type: "color-array" },
      { key: "BannerLeftPlugColor", type: "color" },
      { key: "BannerRightPlugColor", type: "color" },
    ],
  },
  {
    id: "status-bar",
    label: "Status Bar",
    separatorKey: "______________STATUS_BAR______________",
    separatorValue: "Status Bar",
    fields: [
      { key: "StatusBarTypeScreensWithBanner", type: "string" },
      { key: "StatusBarTypeLoginScreens", type: "string" },
      { key: "StatusBarTypeAllOthersScreens", type: "string" },
    ],
  },
  {
    id: "login",
    label: "Login",
    separatorKey: "______________LOGIN______________",
    separatorValue: "Login Parameters",
    fields: [
      { key: "EnableForgotPassword", type: "boolean" },
      { key: "ContactUsText", type: "string" },
      { key: "ForgotPasswordLink", type: "string" },
      { key: "SecretPhraseTitle", type: "string" },
      { key: "SecretPhraseDescription", type: "string" },
    ],
  },
  {
    id: "navigation-bar",
    label: "Navigation Bar",
    separatorKey: "______________NAVIGATION_BAR______________",
    separatorValue: "Navigation bar parameters",
    fields: [
      { key: "HomeTabName", type: "string" },
      { key: "TabSliderColor", type: "color" },
      { key: "ActiveTabColor", type: "color" },
      { key: "InactiveTabColor", type: "color" },
    ],
  },
  {
    id: "banner",
    label: "Banner",
    separatorKey: "______________BANNER______________",
    separatorValue: "Banner parameters",
    fields: [
      { key: "BannerBackgroundColor", type: "color" },
      { key: "BannerIconColor", type: "color" },
      { key: "BannerTextColor", type: "color" },
      { key: "AsOfOffset", type: "number" },
    ],
  },
  {
    id: "contact-us",
    label: "Contact Us",
    separatorKey: "______________CONTACT_US______________",
    separatorValue: "Contact Screen parameters",
    fields: [
      { key: "ContactUsTitle", type: "string" },
      { key: "ContactUsDescription", type: "string" },
      { key: "ContactUsIconsColor", type: "color" },
      { key: "ContactUsTextColor", type: "color" },
      { key: "EmailFieldLabel", type: "string" },
      { key: "EmailFieldValue", type: "string" },
      { key: "HideEmailField", type: "boolean" },
      { key: "PhoneFieldLabel", type: "string" },
      { key: "PhoneFieldValue", type: "string" },
      { key: "HidePhoneField", type: "boolean" },
      { key: "WebsiteFieldLabel", type: "string" },
      { key: "WebsiteFieldValue", type: "string" },
      { key: "HideWebsiteField", type: "boolean" },
      { key: "ClientPortalFieldLabel", type: "string" },
      { key: "ClientPortalFieldValue", type: "string" },
      { key: "HideClientPortalField", type: "boolean" },
      { key: "HeadOfficeFieldLabel", type: "string" },
      { key: "HeadOfficeFieldValue", type: "text" },
      { key: "HideHeadOfficeField", type: "boolean" },
    ],
  },
  {
    id: "allocation-chart",
    label: "Allocation Chart",
    separatorKey: "______________ALLOCATION_CHART______________",
    separatorValue: "Allocation Chart parameters",
    fields: [
      { key: "AllocationChartColors", type: "color-array" },
      { key: "AllocationAccountsName", type: "string" },
      { key: "AllocationAccountsDescription", type: "string" },
      { key: "AllocationAssetsName", type: "string" },
      { key: "AllocationAssetsDescription", type: "string" },
      { key: "AllocationGeographicName", type: "string" },
      { key: "AllocationGeographicDescription", type: "string" },
      { key: "AllocationPortfolioName", type: "string" },
      { key: "AllocationPortfolioDescription", type: "string" },
      { key: "AssetAllocationFieldGroupBy", type: "string" },
      { key: "GeographicRegionFieldGroupBy", type: "string" },
      { key: "AllocationPriceField", type: "string" },
    ],
  },
  {
    id: "performance-chart",
    label: "Performance Chart",
    separatorKey: "______________PERFORMANCE_CHART______________",
    separatorValue: "Performance Chart parameters",
    fields: [
      { key: "DisablePortfolioChart", type: "boolean" },
      { key: "DisableAccountDrillChart", type: "boolean" },
      { key: "PercentageField", type: "string" },
      { key: "PerformanceLineColour", type: "color" },
      { key: "BenchmarkLineColour", type: "color" },
      { key: "PerformanceGraphDefaultRange", type: "string" },
      { key: "PricingHistoryGraphDefaultRange", type: "string" },
    ],
  },
  {
    id: "tc-privacy-policy",
    label: "T&C / Privacy Policy",
    separatorKey: "______________T&C_PRIVACY_POLICY______________",
    separatorValue: "Allocation Chart parameters",
    fields: [
      { key: "CustomerName", type: "string" },
      { key: "PrivacyPolicyTitle", type: "string" },
      { key: "TermsOfConditionsTitle", type: "string" },
      { key: "PrivacyPolicyText", type: "text" },
      { key: "TermsOfConditionsText", type: "text" },
      { key: "PrivacyPolicyLink", type: "string" },
      { key: "TermsOfConditionsLink", type: "string" },
      { key: "PrivacyPolicyLinkText", type: "string" },
      { key: "TermsOfConditionsLinkText", type: "string" },
    ],
  },
  {
    id: "filter-ui",
    label: "Filter UI",
    separatorKey: "______________FILTER_UI______________",
    separatorValue: "Filter UI parameters",
    fields: [
      { key: "FilterBadgeBackgroundColor", type: "color" },
      { key: "FilterBadgeTextColor", type: "color" },
    ],
  },
  {
    id: "holdings",
    label: "Holdings",
    separatorKey: "______________HOLDINGS______________",
    separatorValue: "Holdings parameters",
    fields: [{ key: "ShowP&LValues", type: "boolean" }],
  },
  {
    id: "holdings-drill",
    label: "Holdings Drill",
    separatorKey: "______________HOLDINGS_DRILL______________",
    separatorValue: "Holdings Drill parameters",
    fields: [
      { key: "DisableHoldingsDrill", type: "boolean" },
      { key: "HoldingsDrillPriceChartColor", type: "color" },
    ],
  },
  {
    id: "transactions",
    label: "Transactions",
    separatorKey: "______________TRANSACTIONS______________",
    separatorValue: "Transactions Screen parameters",
    fields: [
      { key: "TransactionsDefaultPeriod", type: "number" },
      {
        key: "TransactionTypesMapping",
        type: "object-array",
        objectSchema: [
          { key: "name", label: "Name", type: "string" },
          { key: "types", label: "Types", type: "string-array" },
        ],
      },
      { key: "TransactionSectionBannerBackgroundColor", type: "color" },
      { key: "ShowTransactionsAllTab", type: "boolean" },
    ],
  },
  {
    id: "settings",
    label: "Settings",
    separatorKey: "______________SETTINGS______________",
    separatorValue: "Settings Screen parameters",
    fields: [
      { key: "UserPicBackgroundColor", type: "color" },
      { key: "LogoutIconColor", type: "color" },
    ],
  },
  {
    id: "documents",
    label: "Documents",
    separatorKey: "______________DOCUMENTS______________",
    separatorValue: "Documents Screen parameters",
    fields: [
      {
        key: "DocumentGroups",
        type: "object-array",
        objectSchema: [
          { key: "Name", label: "Name", type: "string" },
          { key: "Paths", label: "Paths", type: "string-array" },
        ],
      },
      { key: "BenchmarkPercentageField", type: "string" },
      { key: "DocumentsDefaultPeriod", type: "number" },
      { key: "ShowDocumentsAllTab", type: "boolean" },
    ],
  },
  {
    id: "login-fail",
    label: "Login Fail",
    separatorKey: "______________LOGIN_FAIL______________",
    separatorValue: "Login Fail Form parameters",
    fields: [
      { key: "LoginFailFormButtonColor", type: "color" },
      { key: "LoginFailFormButtonTextColor", type: "color" },
    ],
  },
  {
    id: "reset-secret-phrase",
    label: "Reset Secret Phrase",
    separatorKey: "______________RESET_SECRET_PHRASE_FORM______________",
    separatorValue: "Reset Secret Phrase Form parameters",
    fields: [
      { key: "ResetSecretPhraseFormTitle", type: "string" },
      { key: "ResetSecretPhraseFormDescription", type: "string" },
      { key: "ResetSecretPhraseFormPhrasePlaceholder", type: "string" },
      { key: "ResetSecretPhraseFormConfirmPhrasePlaceholder", type: "string" },
    ],
  },
  {
    id: "badges",
    label: "Badges",
    separatorKey: "______________BADGES______________",
    separatorValue: "Badges Parameters",
    fields: [{ key: "Badges", type: "string-array" }],
  },
];

export function getDefaultValues(): ConfigValues {
  const values: ConfigValues = {};
  for (const section of configSchema) {
    for (const field of section.fields) {
      switch (field.type) {
        case "boolean":
          values[field.key] = "No";
          break;
        case "string":
        case "text":
          values[field.key] = "";
          break;
        case "color":
          values[field.key] = "#000000";
          break;
        case "number":
          values[field.key] = 0;
          break;
        case "color-array":
        case "string-array":
        case "object-array":
          values[field.key] = [];
          break;
      }
    }
  }
  return values;
}
