// pages/api/rss.js
import { Feed } from 'feed';
import { allintegrations, additionaldevelopment } from '../../components/activedevelopment'; // Adjust the path as necessary



export default async function handler(req, res) {
    const feed = new Feed({
        title: "Your Website's Integrations RSS Feed",
        description: "Stay up to date with the latest integrations and developments!",
        id: "https://docs.icon.community/",
        link: "https://docs.icon.community/cross-chain-communication/active-development",
        language: "en",
        image: "https://docs.icon.community/images/icon-documentation-over-white.svg",
        favicon: "https://docs.icon.community/favicon.ico",
        author: {
            name: "ICON Foundation",
            link: "https://www.icon.foundation/contact",
        },
        copyright: "ICON Foundation ©",
        feedLinks: {
            atom: "https://docs.icon.community/api/rss",
        },
    });

    // Process allintegrations
    allintegrations.forEach((integration) => {
        feed.addItem({
            title: integration.name,
            id: `integration-${integration.name}`,
            link: `https://docs.icon.community/activedevelopment`,
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
            link: `https://docs.icon.community/activedevelopment/`,
            description: `${work.description} Status: ${work.status}. Notes: ${work.notes}`,
            date: new Date(), // You might want to use a specific date if available
            // Assuming a generic image or logo for additional works
            image: `https://docs.icon.community/images/default-work-logo.png`,
        });
    });

    const rssFeed = feed.rss2();
    res.setHeader('Content-Type', 'application/rss+xml');
    res.send(rssFeed);
}
