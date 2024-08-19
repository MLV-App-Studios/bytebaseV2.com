import Route from '@web/lib/route';

const menus = [
	{
		name: 'DATABASES',
		items: [
			{ name: 'MySQL', linkUrl: Route.DATABASE_MYSQL },
			{ name: 'PostgreSQL', linkUrl: Route.DATABASE_POSTGRES },
			{ name: 'Snowflake', linkUrl: Route.DATABASE_SNOWFLAKE },
			{ name: 'Oracle', linkUrl: Route.DATABASE_ORACLE },
			{ name: 'SQL Server', linkUrl: Route.DATABASE_SQLSERVER },
			{ name: 'MongoDB', linkUrl: Route.DATABASE_MONGO },
			{ name: 'Redis', linkUrl: Route.DATABASE_REDIS },
			{ name: 'Redshift', linkUrl: Route.DATABASE_REDSHIFT },
			{ name: 'ClickHouse', linkUrl: Route.DATABASE_CLICKHOUSE },
			{ name: 'TiDB', linkUrl: Route.DATABASE_TIDB },
			{ name: 'OceanBase', linkUrl: Route.DATABASE_OCEANBASE },
			{ name: 'Google Spanner', linkUrl: Route.DATABASE_SPANNER },
			{ name: 'MariaDB', linkUrl: Route.DATABASE_MARIADB },
			{ name: 'Databricks', linkUrl: Route.DATABASE_DATABRICKS },
		],
	},
	{
		name: 'INTEGRATIONS',
		items: [
			{ name: 'GitLab', linkUrl: Route.INTEGRATION_GITLAB },
			{ name: 'GitHub', linkUrl: Route.INTEGRATION_GITHUB },
			{ name: 'Bitbucket', linkUrl: Route.INTEGRATION_BITBUCKET },
			{ name: 'Azure DevOps', linkUrl: Route.INTEGRATION_AZURE_DEVOPS },
			{ name: 'Slack', linkUrl: Route.INTEGRATION_SLACK },
			{ name: 'Discord', linkUrl: Route.INTEGRATION_DISCORD },
			{ name: 'Teams', linkUrl: Route.INTEGRATION_TEAMS },
			{ name: 'DingTalk', linkUrl: Route.INTEGRATION_DINGTALK },
			{ name: 'Lark', linkUrl: Route.INTEGRATION_LARK },
			{ name: 'WeCom', linkUrl: Route.INTEGRATION_WECOM },
		],
	},
	{
		name: 'COMPARISONS',
		items: [
			{ name: 'vs. Liquibase', linkUrl: Route.VS_LIQUIBASE },
			{ name: 'vs. Flyway', linkUrl: Route.VS_FLYWAY },
			{ name: 'vs. DBeaver', linkUrl: Route.VS_DBEAVER },
			{ name: 'vs. Navicat', linkUrl: Route.VS_NAVICAT },
			{ name: 'vs. Metabase', linkUrl: Route.VS_METABASE },
			{ name: 'vs. CloudBeaver', linkUrl: Route.VS_CLOUDBEAVER },
			{ name: 'vs. schemachange', linkUrl: Route.VS_SCHEMACHANGE },
			{ name: 'vs. Jira', linkUrl: Route.VS_JIRA },
		],
	},
	{
		name: 'RESOURCES',
		items: [
			{ name: 'Documentation', linkUrl: Route.DOCS },
			{ name: 'Changelog', linkUrl: Route.CHANGELOG },
			{ name: 'Schema Migration', linkUrl: Route.SCHEMA_MIGRATION },
			{ name: 'SQL Editor', linkUrl: Route.SQL_EDITOR },
			{ name: 'Dynamic Data Masking', linkUrl: Route.DATA_MASKING },
			{ name: 'SQL Review Guide', linkUrl: Route.SQL_REVIEW_GUIDE },
			{ name: 'Database Glossary', linkUrl: Route.DATABASE_GLOSSARY },
		],
	},
	{
		name: 'COMPANY',
		items: [
			{ name: 'About', linkUrl: Route.ABOUT },
			{ name: 'Brand', linkUrl: Route.BRAND },
			{ name: 'Terms', linkUrl: Route.TERMS },
			{ name: 'Policy', linkUrl: Route.PRIVACY },
			{ name: 'Security', linkUrl: Route.SECURITY },
			{ name: 'Contact', linkUrl: Route.CONTACTS },
		],
	},
];

export default menus;
