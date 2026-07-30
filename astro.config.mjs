// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: "Anwar's Portfolio",
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/ShoAnn' }],
			sidebar: [
				{
					label: 'Background and Education',
					items: [
						{ label: 'Background', slug: 'about/background' },
						{ label: 'Education', slug: 'about/education' },
						{ label: 'Contacts', slug: 'about/contacts' },
					],
				},
				{
					label: 'Projects',
					collapsed: false,
					items: [
						{ label: 'All Projects', slug: 'projects' },
						{
							label: 'RAG Legal Chatbot',
							items: [
								{ label: 'Overview', slug: 'projects/rag-chatbot/overview' },
								{ label: 'Features', slug: 'projects/rag-chatbot/features' },
								{ label: 'Tech Stack', slug: 'projects/rag-chatbot/tech-stack' },
								{ label: 'Insights', slug: 'projects/rag-chatbot/insights' },
							],
						},
					],
				},
			],
		}),
	],
});
