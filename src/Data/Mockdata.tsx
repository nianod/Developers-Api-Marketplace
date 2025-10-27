export interface API {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  category: string;
  pricing: "Free" | "Paid" | "Freemium";
  rating: number;
  reviews: number;
  popularity: number;
  provider: string;
  imageUrl: string;
  endpoints: number;
}

export interface APIDetail extends API {
  longDescription: string;
  apiEndpoints: {
    method: string;
    endpoint: string;
    description: string;
  }[];
  pricingTiers: {
    name: string;
    price: string;
    requests: string;
    features: string[];
  }[];
  userReviews: {
    id: string;
    user: string;
    rating: number;
    comment: string;
    date: string;
  }[];
}

export const categories = [
  { name: "AI & ML", icon: "Brain", count: 45 },
  { name: "Finance", icon: "DollarSign", count: 32 },
  { name: "Weather", icon: "Cloud", count: 18 },
  { name: "Maps", icon: "Map", count: 25 },
  { name: "Social Media", icon: "Share2", count: 38 },
  { name: "E-commerce", icon: "ShoppingCart", count: 41 },
];

export const mockAPIs: API[] = [
  {
    id: "1",
    name: "GPT-4 Vision API",
    description: "Advanced AI model for text and image understanding",
    shortDescription: "AI-powered text and image analysis",
    category: "AI & ML",
    pricing: "Paid",
    rating: 4.8,
    reviews: 1234,
    popularity: 95,
    provider: "OpenAI",
    imageUrl: "/placeholder.svg",
    endpoints: 12,
  },
  {
    id: "2",
    name: "Stock Market Data",
    description: "Real-time stock prices and financial data",
    shortDescription: "Real-time market data",
    category: "Finance",
    pricing: "Freemium",
    rating: 4.6,
    reviews: 892,
    popularity: 88,
    provider: "FinanceHub",
    imageUrl: "/placeholder.svg",
    endpoints: 8,
  },
  {
    id: "3",
    name: "Weather Forecast Pro",
    description: "Accurate weather predictions and climate data",
    shortDescription: "Global weather forecasting",
    category: "Weather",
    pricing: "Free",
    rating: 4.7,
    reviews: 2156,
    popularity: 92,
    provider: "WeatherTech",
    imageUrl: "/placeholder.svg",
    endpoints: 6,
  },
  {
    id: "4",
    name: "Geocoding Plus",
    description: "Convert addresses to coordinates and vice versa",
    shortDescription: "Address to coordinates conversion",
    category: "Maps",
    pricing: "Freemium",
    rating: 4.5,
    reviews: 674,
    popularity: 79,
    provider: "MapSolutions",
    imageUrl: "/placeholder.svg",
    endpoints: 4,
  },
  {
    id: "5",
    name: "Social Analytics API",
    description: "Track social media metrics and engagement",
    shortDescription: "Social media analytics",
    category: "Social Media",
    pricing: "Paid",
    rating: 4.9,
    reviews: 1567,
    popularity: 97,
    provider: "SocialMetrics",
    imageUrl: "/placeholder.svg",
    endpoints: 15,
  },
  {
    id: "6",
    name: "Payment Gateway API",
    description: "Secure payment processing for e-commerce",
    shortDescription: "Secure payment processing",
    category: "E-commerce",
    pricing: "Paid",
    rating: 4.8,
    reviews: 3421,
    popularity: 98,
    provider: "PaySecure",
    imageUrl: "/placeholder.svg",
    endpoints: 10,
  },
];

export const getAPIDetails = (id: string): APIDetail => {
  const api = mockAPIs.find((a) => a.id === id);
  if (!api) throw new Error("API not found");

  return {
    ...api,
    longDescription: `${api.description}. This comprehensive API provides developers with powerful tools to integrate ${api.category.toLowerCase()} functionality into their applications. Built with scalability and reliability in mind, it serves thousands of developers worldwide.`,
    apiEndpoints: [
      {
        method: "GET",
        endpoint: "/api/v1/data",
        description: "Retrieve data from the service",
      },
      {
        method: "POST",
        endpoint: "/api/v1/create",
        description: "Create new resource",
      },
      {
        method: "PUT",
        endpoint: "/api/v1/update/:id",
        description: "Update existing resource",
      },
    ],
    pricingTiers: [
      {
        name: "Free",
        price: "$0/month",
        requests: "1,000 requests/month",
        features: ["Basic support", "Standard rate limits", "Community access"],
      },
      {
        name: "Pro",
        price: "$49/month",
        requests: "50,000 requests/month",
        features: [
          "Priority support",
          "Higher rate limits",
          "Advanced features",
          "99.9% uptime SLA",
        ],
      },
      {
        name: "Enterprise",
        price: "Custom",
        requests: "Unlimited",
        features: [
          "24/7 dedicated support",
          "Custom rate limits",
          "All features",
          "99.99% uptime SLA",
          "Custom integrations",
        ],
      },
    ],
    userReviews: [
      {
        id: "1",
        user: "John Developer",
        rating: 5,
        comment:
          "Excellent API! Easy to integrate and very reliable. Documentation is top-notch.",
        date: "2024-01-15",
      },
      {
        id: "2",
        user: "Sarah Chen",
        rating: 4,
        comment:
          "Great service overall. Would love to see more examples in the docs.",
        date: "2024-01-10",
      },
    ],
  };
};
