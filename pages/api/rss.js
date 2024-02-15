// pages/api/rss.js
import { Feed } from 'feed';
import { allintegrations, additionaldevelopment } from '../../components/activedevelopment'; // Adjust the path as necessary



export default async function handler(req, res) {
    const feed = new Feed({
        title: "Your Website's Integrations RSS Feed",
        description: "Stay up to date with the latest integrations and developments!",
        id: "https://icon-documentation-2024-git-main-docs-v2-icon-foundation.vercel.app/",
        link: "https://icon-documentation-2024-git-main-docs-v2-icon-foundation.vercel.app/cross-chain-communication/active-development",
        language: "en",
        image: "https://www.icon-documentation-2024-git-main-docs-v2-icon-foundation.vercel.app/images/icon-documentation-over-white.svg",
        favicon: "https://icon-documentation-2024-git-main-docs-v2-icon-foundation.vercel.app/favicon.ico",
        author: {
            name: "ICON Foundation",
            link: "https://www.icon.foundation/contact",
        },
        copyright: "ICON Foundation ©",
        feedLinks: {
            atom: "https://icon-documentation-2024-git-main-docs-v2-icon-foundation.vercel.app/api/rss",
        },
    });

    // Process allintegrations
    allintegrations.forEach((integration) => {
        feed.addItem({
            title: integration.name,
            id: `integration-${integration.name}`,
            link: `https://icon-documentation-2024-git-main-docs-v2-icon-foundation.vercel.app/activedevelopment`,
            description: `Status: ${integration.status}. Protocols: ${integration.protocol.join(', ') || 'N/A'}`,
            date: new Date(),
            image: `https://icon-documentation-2024-git-main-docs-v2-icon-foundation.vercel.app${integration.logo}`,
        });
    });

    // Process additionaldevelopment
    additionaldevelopment.forEach((work) => {
        feed.addItem({
            title: work.name,
            id: `work-${work.name}`,
            link: `https://icon-documentation-2024-git-main-docs-v2-icon-foundation.vercel.app/activedevelopment/`,
            description: `${work.description} Status: ${work.status}. Notes: ${work.notes}`,
            date: new Date(), // You might want to use a specific date if available
            // Assuming a generic image or logo for additional works
            image: `https://icon-documentation-2024-git-main-docs-v2-icon-foundation.vercel.app/images/default-work-logo.png`,
        });
    });

    const rssFeed = feed.rss2();
    res.setHeader('Content-Type', 'application/rss+xml');
    res.send(rssFeed);
}
