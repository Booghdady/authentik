// THIS IS A GENERATED FILE.  DO NOT EDIT BY HAND.
//
// This file is generated by the build-storybook-import-maps script in the UI's base directory.
// This is a *hack* to work around an inconsistency in the way rollup, vite, and storybook
// import CSS modules.
//
// Sometime around 2030 or so, the Javascript community may finally get its collective act together
// and we'll have one unified way of doing this.  I can only hope.

const rawCssImportMaps = [
    'import AKGlobal from "@goauthentik/common/styles/authentik.css";',
    'import PFAlert from "@patternfly/patternfly/components/Alert/alert.css";',
    'import PFAlertGroup from "@patternfly/patternfly/components/AlertGroup/alert-group.css";',
    'import PFAvatar from "@patternfly/patternfly/components/Avatar/avatar.css";',
    'import PFBackdrop from "@patternfly/patternfly/components/Backdrop/backdrop.css";',
    'import PFBackgroundImage from "@patternfly/patternfly/components/BackgroundImage/background-image.css";',
    'import PFBanner from "@patternfly/patternfly/components/Banner/banner.css";',
    'import PFBase from "@patternfly/patternfly/patternfly-base.css";',
    'import PFBrand from "@patternfly/patternfly/components/Brand/brand.css";',
    'import PFBullseye from "@patternfly/patternfly/layouts/Bullseye/bullseye.css";',
    'import PFButton from "@patternfly/patternfly/components/Button/button.css";',
    'import PFCard from "@patternfly/patternfly/components/Card/card.css";',
    'import PFCheck from "@patternfly/patternfly/components/Check/check.css";',
    'import PFChip from "@patternfly/patternfly/components/Chip/chip.css";',
    'import PFChipGroup from "@patternfly/patternfly/components/ChipGroup/chip-group.css";',
    'import PFContent from "@patternfly/patternfly/components/Content/content.css";',
    'import PFDataList from "@patternfly/patternfly/components/DataList/data-list.css";',
    'import PFDescriptionList from "@patternfly/patternfly/components/DescriptionList/description-list.css";',
    'import PFDisplay from "@patternfly/patternfly/utilities/Display/display.css";',
    'import PFDivider from "@patternfly/patternfly/components/Divider/divider.css";',
    'import PFDrawer from "@patternfly/patternfly/components/Drawer/drawer.css";',
    'import PFDropdown from "@patternfly/patternfly/components/Dropdown/dropdown.css";',
    'import PFDualListSelector from "@patternfly/patternfly/components/DualListSelector/dual-list-selector.css";',
    'import PFEmptyState from "@patternfly/patternfly/components/EmptyState/empty-state.css";',
    'import PFExpandableSection from "@patternfly/patternfly/components/ExpandableSection/expandable-section.css";',
    'import PFFAIcons from "@patternfly/patternfly/base/patternfly-fa-icons.css";',
    'import PFFlex from "@patternfly/patternfly/layouts/Flex/flex.css";',
    'import PFForm from "@patternfly/patternfly/components/Form/form.css";',
    'import PFFormControl from "@patternfly/patternfly/components/FormControl/form-control.css";',
    'import PFGallery from "@patternfly/patternfly/layouts/Gallery/gallery.css";',
    'import PFGlobal from "@patternfly/patternfly/patternfly-base.css";',
    'import PFGrid from "@patternfly/patternfly/layouts/Grid/grid.css";',
    'import PFInputGroup from "@patternfly/patternfly/components/InputGroup/input-group.css";',
    'import PFLabel from "@patternfly/patternfly/components/Label/label.css";',
    'import PFList from "@patternfly/patternfly/components/List/list.css";',
    'import PFLogin from "@patternfly/patternfly/components/Login/login.css";',
    'import PFModalBox from "@patternfly/patternfly/components/ModalBox/modal-box.css";',
    'import PFNav from "@patternfly/patternfly/components/Nav/nav.css";',
    'import PFNotificationBadge from "@patternfly/patternfly/components/NotificationBadge/notification-badge.css";',
    'import PFNotificationDrawer from "@patternfly/patternfly/components/NotificationDrawer/notification-drawer.css";',
    'import PFPage from "@patternfly/patternfly/components/Page/page.css";',
    'import PFPagination from "@patternfly/patternfly/components/Pagination/pagination.css";',
    'import PFProgressStepper from "@patternfly/patternfly/components/ProgressStepper/progress-stepper.css";',
    'import PFRadio from "@patternfly/patternfly/components/Radio/radio.css";',
    'import PFSelect from "@patternfly/patternfly/components/Select/select.css";',
    'import PFSidebar from "@patternfly/patternfly/components/Sidebar/sidebar.css";',
    'import PFSizing from "@patternfly/patternfly/utilities/Sizing/sizing.css";',
    'import PFSpacing from "@patternfly/patternfly/utilities/Spacing/spacing.css";',
    'import PFSpinner from "@patternfly/patternfly/components/Spinner/spinner.css";',
    'import PFSplit from "@patternfly/patternfly/layouts/Split/split.css";',
    'import PFStack from "@patternfly/patternfly/layouts/Stack/stack.css";',
    'import PFSwitch from "@patternfly/patternfly/components/Switch/switch.css";',
    'import PFTable from "@patternfly/patternfly/components/Table/table.css";',
    'import PFTabs from "@patternfly/patternfly/components/Tabs/tabs.css";',
    'import PFText from "@patternfly/patternfly/utilities/Text/text.css";',
    'import PFTitle from "@patternfly/patternfly/components/Title/title.css";',
    'import PFToggleGroup from "@patternfly/patternfly/components/ToggleGroup/toggle-group.css";',
    'import PFToolbar from "@patternfly/patternfly/components/Toolbar/toolbar.css";',
    'import PFTreeView from "@patternfly/patternfly/components/TreeView/tree-view.css";',
    'import PFWizard from "@patternfly/patternfly/components/Wizard/wizard.css";',
    'import ThemeDark from "@goauthentik/common/styles/theme-dark.css";',
    'import styles from "./LibraryPageImpl.css";',
];

const cssImportMaps = rawCssImportMaps.reduce(
    (acc, line) => ({ ...acc, [line]: line.replace(/\.css/, ".css?inline") }),
    {},
);

export { cssImportMaps };
export default cssImportMaps;
