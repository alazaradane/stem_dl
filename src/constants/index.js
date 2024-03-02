import { facebook, instagram, twitter } from "../assets/icons";
import { customer1, customer2, security, favorites, help, face, voice, emotion, bussiness} from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Services" },
    { href: "#contact-us", label: "Contact Us" },
];



export const statistics = [
    { value: '32', label: 'Genres' },
    { value: '500+', label: 'Books' },
    { value: '150k+', label: 'Members' },
];

export const products = [
    {
        imgURL: face,
        name: "Infinite Powers ",
        detail:`Recounts how calculus tantalized and thrilled its inventors`,
    },
    {
        imgURL: voice,
        name: "A Brief History of Time",
        detail: `All the way from the beginning of the universe to its end`,
    },
    {
        imgURL: emotion,
        name: "The God Equation",
        detail: `The nature of reality, how the laws of physics apply to the universe `,
    },
    {
        imgURL: bussiness,
        name: "The Elegant Universe",
        detail: `The universe that most people do not know, from superstring theory to additional dimensions.`,
    },
];

export const services = [
    {
        imgURL: favorites,
        label: "Quality Solutions",
        subtext: `Elevate your standards with our superior-quality services, tailored to exceed your expectations.`
    },
    {
        imgURL: security,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: help,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the service exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The service not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "STEM Resources", link: "/" },
            { name: "Study Guides", link: "/" },
            { name: "Top-Tier Books", link: "/" },
            { name: "Popular Reads Collectio", link: "/" },
            { name: "Practice Sets and Worksheets", link: "/" },
            { name: "Others", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@stemdl369.com", link: "mailto:customer@stemdl369.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];