export interface IPnPjsExampleProps {
  description: string;
  isDarkTheme: boolean;
  environmentMessage: string;
  hasTeamsContext: boolean;
  userDisplayName: string;
  userDisplayEmail: string;
  site: {
    absoluteUrl: string;
    serverRelativeUrl: string;
    serverRequestPath: string;
  };
}
