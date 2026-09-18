export const channels = [
  {
    key: "text",
    title: "Online text",
    tagline: "Social and professional media, side by side.",
    body: "We measure and analyse social media alongside professional online media such as news portals — tracking brands, products, campaigns and public events by the impact they have on the online community.",
    deliver: "Sentiment polarity, plus the drivers behind positive and negative comment.",
  },
  {
    key: "video",
    title: "Video",
    tagline: "Every second your logo is on screen.",
    body: "We analyse digital footage to identify brand exposure via sponsorship — sideboards, overlays and logos in sports coverage — or via product placement in TV and film.",
    deliver: "Exposure in seconds (time‑in, time‑out) and screen location, with variable occlusion and logo‑size thresholds. Footage capture available on request.",
  },
  {
    key: "audio",
    title: "Audio",
    tagline: "What is said, and how it is said.",
    body: "We analyse digital audio signals to detect references to sponsors, people and brands, down to the second.",
    deliver: "Keyword and key‑phrase mentions with contextual sentiment (via speech‑to‑text) and emotion (via voice analysis). Stream capture available on request.",
  },
  {
    key: "print",
    title: "Print media",
    tagline: "Publications, digitised and measured.",
    body: "We measure exposure in publications available online in their print form — free or by subscription — and can digitise print media for you.",
    deliver: "Sentiment and its drivers, publication metadata (page, journalist) and photo exposure: the size and location of your logo in every image.",
  },
] as const;

export const steps = [
  {
    n: "01",
    title: "Defining the search",
    body: "You define the “category” in a standard brief. It can be wide — compact cars, horror movies — or narrow: the new Mini Cooper, a single film title. We run early probes on the web to augment the description, double‑check the findings with you, then our machine‑learning algorithms build an ontology for the category from both the brief and the content discovered.",
    time: "2 days – 1 week",
  },
  {
    n: "02",
    title: "Collecting & analysing",
    body: "Our proprietary focused crawlers use the ontology to separate mentions from opinions across roughly half a million online resources. Content is processed, classified and analysed: we calculate clusters, measure sentiment polarity and identify sentiment drivers — which aspect of the brand, product or person drives positive or negative opinion. Results are normalised by the buzzfactor.",
    time: "Continuous",
  },
  {
    n: "03",
    title: "Reporting",
    body: "An online dashboard with key volume and sentiment metrics — and the actual data underneath it. Every comment, its URL, its buzzfactor. Alongside the data we provide our own analysis and conclusions and, where requested, graphical representations of public sentiment.",
    time: "Daily, once trained",
  },
] as const;

export const audiences = [
  {
    slug: "ad-agencies",
    title: "Ad agencies",
    lede: "“Half the money I spend on advertising is wasted; the trouble is, I don’t know which half.” Today, i‑sieve could tell John Wanamaker.",
    body: "Our sentiment analysis finds out what people say about a given campaign — what they like, what they don’t, and how public perception of the product has shifted because of it. Experience has taught us to expect the unexpected: the public often fixes on an aspect that seems peripheral to the campaign itself, and it’s exactly this intelligence that lets agencies deliver future messages in terms that make sense to the target market.",
  },
  {
    slug: "media",
    title: "Media organisations",
    lede: "When audiences are measured in millions, keeping track of their reaction is daunting. Surveys are expensive and only ever answer the question posed.",
    body: "i‑sieve measures public reaction close to real time — once trained, we can deliver sentiment results daily. We pick up every relevant comment, positive, negative, neutral or unexpected, identifying key words, phrases and sentiment drivers. Because the system is automated it scales to large volumes of data. And it’s smart: we recognise opinion shapers versus followers, mainstream versus extreme, the considered versus the ill‑informed.",
  },
  {
    slug: "brand-owners",
    title: "Brand owners",
    lede: "Do people see you as a lemon or a peach? Do they use your brand name as a verb? How do they refer to what you sell when they don’t use your name at all?",
    body: "These are the questions i‑sieve answers. We can do it as a snapshot, but the real value comes from tracking perceptions of your brand over time. Once our system is trained to recognise comment about your brand, long‑term monitoring of sentiment is easy to maintain at low cost.",
  },
  {
    slug: "compliance",
    title: "Standards bodies",
    lede: "How many people actually go to the bother of complaining? And how typical are those complaints?",
    body: "Journalists work to standards of accuracy, films and games carry age ratings, restaurants have hygiene rules. Compliance is usually monitored by responding to complaints received. i‑sieve monitors public comment instead: a tweet about a rat in a restaurant, a blog post questioning a game’s rating. Here the system is trained to find comments about breaches of the standard rather than a particular brand.",
  },
  {
    slug: "policy",
    title: "Policy makers",
    lede: "What do people really think about climate change? Which measures of the economy do people most care about? How representative are the loudest voices?",
    body: "Rather than polling a thousand individuals, we analyse the sentiment expressed in hundreds of thousands of blogs, micro‑blogs, videos and comments. We track changes in opinion and help pinpoint the underlying cause of any shift or hardening. Results are statistically valid and you receive the actual data. Long‑term monitoring of an issue is particularly cost effective.",
  },
] as const;

export const caseStudy = {
  title: "London Climate Camp",
  when: "26 August – 2 September 2009",
  context:
    "A protest organised via social media, with the location kept secret until the last minute. We tracked reaction to the companies named by participants and observers.",
  stats: [
    { label: "Relevant references", value: "2,800", note: "tweets, blogs, forums, web pages" },
    { label: "Named specific companies", value: "311" },
    { label: "Relevant tweets", value: "1,700", note: "104 with company opinions" },
  ],
  web: { positive: 7, negative: 30, neutral: 63 },
  shellWeb: { positive: 9, negative: 21, neutral: 70 },
  shellTwitter: { positive: 0, negative: 60, neutral: 40 },
  twitterShare: [
    { name: "Shell", pct: 50 },
    { name: "BP", pct: 44 },
    { name: "Guardian", pct: 3 },
    { name: "Chevron", pct: 2 },
    { name: "Exxon", pct: 1 },
  ],
  quotes: [
    { text: "Live from Climate Camp: four activists have climbed onto Shell entrance and removed ‘S’ on sign so it reads hell centre", source: "twitter.com/standardnews", tone: "negative" },
    { text: "I think everyone’s aware of the hypocrisy of these events", source: "leonneal.com", tone: "negative" },
    { text: "Remember when Shell used to sponsor Wildlife Photographer of the Year?", source: "ameliasmagazine.com", tone: "neutral" },
  ],
};
