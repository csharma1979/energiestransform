'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../../layout/Header/Header';
import Footer from '../../layout/Footer/Footer';
import { FaCalendar, FaUser, FaTag } from 'react-icons/fa';
import './BlogDetails.scss';

const BlogDetail = () => {
  const { id } = useParams();
  
  // Mock blog data with full content for all blog posts
  const blogPosts = [
    {
      id: 1,
      title: "How AI-Powered Keyword Generator Can Boost Your SEO Rankings",
      fullContent: `
        Keyword research is the foundation of any successful SEO strategy. Traditionally, this process has been time-consuming and often subjective. However, with the advent of AI-powered keyword generators, businesses can now streamline their SEO efforts and achieve better results.

        Understanding AI-Powered Keyword Generators

        AI-powered keyword generators utilize machine learning algorithms to analyze vast amounts of data, including search trends, user behavior, and competitor strategies. These tools can identify relevant keywords that may have been overlooked through traditional research methods.

        Benefits of AI Keyword Generation

        1. Time Efficiency: What once took hours or days can now be accomplished in minutes.
        2. Data-Driven Insights: AI tools provide recommendations based on real data rather than assumptions.
        3. Competitive Analysis: Quickly identify keyword opportunities your competitors might be missing.
        4. Long-tail Keyword Discovery: Uncover valuable long-tail keywords that drive targeted traffic.

        Implementing AI Keywords in Your SEO Strategy

        Once you've generated a list of AI-recommended keywords, it's crucial to implement them strategically:
        - Incorporate them naturally into your content
        - Use them in meta descriptions and title tags
        - Create content clusters around related keywords
        - Monitor and adjust based on performance

        The Future of SEO with AI

        As AI technology continues to evolve, we can expect even more sophisticated keyword research tools. These advancements will likely include:
        - Predictive analytics for emerging trends
        - Personalized keyword recommendations based on your niche
        - Automated content optimization suggestions
        - Real-time competitive analysis

        Conclusion

        AI-powered keyword generators are transforming the SEO landscape. By embracing these tools, businesses can stay ahead of the competition and improve their search engine rankings effectively.
      `,
      image: "/assets/ai-seo.webp",
      category: "Digital Marketing",
      date: "June 15, 2023",
      author: {
        name: "John Smith",
        position: "SEO Specialist",
        experience: "10+ years in Digital Marketing"
      },
      tags: ["SEO", "AI", "Digital Marketing", "Keywords"]
    },
    {
      id: 2,
      title: "Digital Transformation Strategies for Modern Businesses",
      fullContent: `
        The business landscape is evolving rapidly, and digital transformation has become a necessity rather than a luxury. Companies that successfully implement digital transformation strategies can gain a significant competitive advantage in today's technology-driven market.

        Understanding Digital Transformation

        Digital transformation involves integrating digital technology into all areas of a business, fundamentally changing how you operate and deliver value to customers. It's also a cultural change that requires organizations to continually challenge the status quo, experiment, and get comfortable with failure.

        Key Components of Successful Digital Transformation

        Technology Integration
        The foundation of digital transformation is the adoption of new technologies. This includes cloud computing, artificial intelligence, big data analytics, Internet of Things (IoT), and automation tools. However, technology alone isn't enough—it must be strategically implemented to solve specific business challenges.

        Cultural Shift
        True digital transformation requires a cultural change within the organization. Leadership must foster a culture that embraces innovation, agility, and continuous learning. Employees should be encouraged to experiment with new approaches and not fear failure when testing new ideas.

        Customer-Centric Approach
        Successful digital transformation places the customer at the center of every strategy. By leveraging data analytics, businesses can gain deeper insights into customer behavior and preferences, allowing for more personalized experiences and offerings.

        Implementation Framework for Digital Transformation

        Assessment and Planning
        Begin by conducting a thorough assessment of your current digital capabilities and identifying gaps. Create a clear roadmap with measurable goals and timelines. This should include short-term wins to build momentum and long-term strategic objectives.

        Building Digital Capabilities
        Invest in developing the necessary infrastructure and skills within your organization. This may involve hiring new talent, training existing employees, or partnering with external experts. Focus on creating cross-functional teams that can break down traditional silos.

        Execution and Iteration
        Implement your digital initiatives using an agile approach—start small, test, learn, and scale successful projects. Continuously measure results against your established KPIs and be prepared to pivot when necessary.

        Common Challenges and Solutions

        Resistance to Change: Address this by clearly communicating the vision and benefits of digital transformation, involving employees in the process, and providing adequate training and support.

        Legacy Systems: Develop a phased approach to modernizing your technology infrastructure while ensuring business continuity.

        Data Security Concerns: Implement robust cybersecurity measures and ensure compliance with relevant regulations from the beginning of your transformation journey.

        Conclusion

        Digital transformation is no longer optional for businesses that want to remain competitive. By developing a comprehensive strategy that addresses technology, culture, and customer needs, organizations can successfully navigate the digital landscape and position themselves for sustainable growth in an increasingly connected world.
      `,
      image: "/assets/digital-transform.webp",
      category: "Business Strategy",
      date: "June 20, 2023",
      author: {
        name: "Emma Johnson",
        position: "Digital Transformation Consultant",
        experience: "12+ years in Business Technology"
      },
      tags: ["Digital Transformation", "Business Strategy", "Innovation", "Technology"]
    },
    {
      id: 3,
      title: "Effective Crisis Management in Modern Business",
      fullContent: `
        In today's volatile business environment, crisis situations can emerge unexpectedly and escalate rapidly. From cybersecurity breaches to public relations disasters, the ability to effectively manage crises has become an essential competency for organizations of all sizes.

        The Evolution of Crisis Management

        Crisis management has evolved significantly in recent years, largely due to the impact of social media and 24-hour news cycles. What once might have been contained as a local issue can now become global news within minutes. This new reality requires businesses to develop more sophisticated and responsive crisis management strategies.

        Core Principles of Effective Crisis Management

        Preparation is Paramount
        The most successful crisis management begins long before a crisis occurs. Organizations should invest time in identifying potential vulnerabilities, developing comprehensive response plans, and regularly conducting crisis simulations. These preparations create muscle memory that proves invaluable when real crises emerge.

        Communication Strategy
        Clear, transparent, and timely communication is essential during a crisis. Companies must be prepared to address all stakeholders—including employees, customers, shareholders, and the broader public—with consistent messaging across multiple channels. The first 24-48 hours are often critical in shaping public perception.

        Leadership During Crisis
        Strong leadership becomes even more crucial during turbulent times. Effective crisis leaders demonstrate empathy, take responsibility when appropriate, and maintain visibility throughout the situation. They strike a balance between decisive action and thoughtful consideration of long-term implications.

        Building a Crisis Management Framework

        Crisis Prevention
        Implement proactive measures to identify and mitigate potential risks before they escalate into full-blown crises. This includes regular risk assessments, establishing early warning systems, and fostering a culture where employees feel comfortable reporting potential issues.

        Crisis Response Team
        Assemble a cross-functional team with clearly defined roles and responsibilities. This team should include representatives from executive leadership, communications, legal, operations, and human resources. Each member should understand their specific duties during different types of crises.

        Response Protocols
        Develop detailed protocols that outline step-by-step procedures for various crisis scenarios. These should include decision-making frameworks, communication templates, and escalation paths. Regular training ensures team members can execute these protocols effectively under pressure.

        Post-Crisis Analysis
        After the immediate crisis has passed, conduct a thorough analysis of what happened, how it was handled, and what could be improved. This "lessons learned" approach helps strengthen your crisis management capabilities for the future.

        Technology and Tools for Modern Crisis Management

        Modern crisis management leverages various technologies to enhance response capabilities:
        
        - Crisis management software for coordinating response activities
        - Social media monitoring tools for tracking public sentiment
        - Internal communication platforms for keeping employees informed
        - Data analytics for assessing impact and informing decisions

        Conclusion

        In an increasingly unpredictable business landscape, effective Crisis management has become a competitive advantage. Organizations that invest in building robust crisis management capabilities demonstrate resilience that protects their reputation, operations, and bottom line when inevitable challenges arise. By embracing the principles and frameworks outlined above, businesses can transform potential disasters into opportunities to demonstrate their values and commitment to stakeholders.
      `,
      image: "/assets/crisis-management.webp",
      category: "Business Management",
      date: "June 25, 2023",
      author: {
        name: "Michael Chen",
        position: "Crisis Management Specialist",
        experience: "15+ years in Corporate Communications"
      },
      tags: ["Crisis Management", "Risk Mitigation", "Corporate Communication", "Leadership"]
    },
    {
      id: 4,
      title: "Strategic Planning for Business Growth",
      fullContent: `
        Strategic planning is the cornerstone of sustainable business growth. In an era characterized by rapid technological change and global competition, having a well-defined strategic plan is more important than ever for organizations seeking to expand their market presence and enhance profitability.

        The Foundation of Strategic Growth Planning

        Effective strategic planning for growth begins with a clear understanding of your current position in the market and a compelling vision for where you want to be. This requires honest assessment of your organization's strengths, weaknesses, opportunities, and threats—the classic SWOT analysis, but with a specific focus on growth enablers and inhibitors.

        Core Components of Growth-Oriented Strategic Planning

        Market Analysis and Opportunity Identification
        
        Before plotting a growth trajectory, organizations must conduct thorough market research to identify viable opportunities. This includes analyzing market trends, customer needs, competitive landscape, and potential untapped segments. The most sustainable growth often comes from finding the intersection between market needs and your company's unique capabilities.
        
        Strategic growth requires organizations to honestly evaluate their internal capabilities and identify gaps that might hinder expansion plans. This assessment should examine operational capacity, financial resources, talent availability, and technological infrastructure. Understanding these elements helps determine whether organic growth is feasible or if strategic partnerships might be necessary.

        Setting Clear Growth Objectives
        
        Growth objectives should be specific, measurable, achievable, relevant, and time-bound (SMART). Examples include:
        - Increasing market share by X% within 18 months
        - Expanding into two new geographic markets by Q3
        - Launching three new complementary products within the next fiscal year
        - Achieving X% revenue growth from existing customers
        
        These objectives provide direction and serve as benchmarks for measuring progress.

        Strategic Growth Frameworks

        Ansoff Matrix Implementation
        
        The Ansoff Matrix provides four strategic options for growth:
        
        1. Market Penetration: Selling more existing products to current markets through enhanced marketing, competitive pricing, or improved customer experience.
        
        2. Market Development: Introducing existing products to new markets, whether geographical, demographic, or psychographic.
        
        3. Product Development: Creating new products or services for existing markets, leveraging established customer relationships and brand trust.
        
        4. Diversification: Developing new products for new markets, often the riskiest strategy but potentially the most rewarding.
        
        Each approach carries different levels of risk and resource requirements, which must be carefully evaluated against your organization's risk tolerance and capabilities.

        Execution Excellence

        Resource Allocation

        Strategic growth requires intentional allocation of resources—financial, human, and technological. This often means making difficult trade-offs between short-term performance and long-term growth initiatives. Successful organizations create dedicated funding mechanisms for strategic growth projects, protecting them from operational budget pressures.

        Organizational Alignment

        Growth strategies fail when they aren't properly communicated and embraced throughout the organization. Leaders must ensure that everyone understands how the growth strategy affects their role and how they contribute to its success. This alignment extends to performance metrics and incentive structures.

        Monitoring and Adaptation

        The most effective growth strategies include robust monitoring mechanisms that track key performance indicators and allow for course correction. Regular strategy review sessions should examine both leading and lagging indicators of success, with a willingness to adapt when market conditions change or initial assumptions prove incorrect.

        Conclusion

        Strategic planning for business growth is not a one-time exercise but an ongoing process that requires commitment, discipline, and flexibility. Organizations that excel at growth planning create clear roadmaps while maintaining the agility to respond to changing market conditions. By investing in thoughtful strategy development and disciplined execution, businesses can achieve sustainable growth that creates value for customers, employees, and shareholders alike.
      `,
      image: "/assets/strategic-planning.webp",
      category: "Business Growth",
      date: "June 30, 2023",
      author: {
        name: "Sarah Williams",
        position: "Business Strategy Consultant",
        experience: "18+ years in Strategic Management"
      },
      tags: ["Strategic Planning", "Business Growth", "Market Analysis", "Execution"]
    }
  ];

  const recentPosts = [
    {
      id: 2,
      title: "Digital Transformation Strategies for Modern Businesses",
      image: "/assets/digital-transform.webp",
      date: "June 20, 2023",
      excerpt: "Learn how businesses are leveraging digital transformation to stay competitive..."
    },
    {
      id: 3,
      title: "Effective Crisis Management in Modern Business",
      image: "/assets/crisis-management.webp",
      date: "June 25, 2023",
      excerpt: "Understanding the key principles of managing business crises..."
    },
    {
      id: 4,
      title: "Strategic Planning for Business Growth",
      image: "/assets/strategic-planning.webp",
      date: "June 30, 2023",
      excerpt: "Essential strategies and frameworks for sustainable business growth..."
    }
  ];

  const currentPost = blogPosts.find(post => post.id === parseInt(id));

  if (!currentPost) {
    return <div>Blog post not found</div>;
  }

  // Replace useParams with Next.js routing
  const params = useParams();
const postId = params?.id;

  return (
    <div className="blog-detail-page">
      <Header />
      
      <div className="breadcrumb-section">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span> / </span>
            <Link href="/blog">Blog</Link>
            <span> / </span>
            <span>{currentPost.title}</span>
          </div>
        </div>
      </div>

      <div className="blog-content">
        <div className="container">
          <div className="content-wrapper">
            <div className="main-content">
              <div className="blog-header">
                <Image
                  src={currentPost.image}
                  alt={currentPost.title}
                  width={1200}
                  height={600}
                  className="blog-hero-image"
                  priority
                  style={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'cover'
                  }}
                />
                <h1>{currentPost.title}</h1>
                <div className="meta-info">
                  <span className="date">
                    <FaCalendar /> {currentPost.date}
                  </span>
                  <span className="author">
                    <FaUser /> {currentPost.author.name}
                  </span>
                  <span className="category">
                    <FaTag /> {currentPost.category}
                  </span>
                </div>
              </div>

              <div className="blog-article">
                {currentPost.fullContent.split('\n').map((paragraph, index) => (
                  paragraph.trim() && <p key={index}>{paragraph.trim()}</p>
                ))}
              </div>

              <div className="tags-section">
                <h3>Tags:</h3>
                <div className="tags-list">
                  {currentPost.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="sidebar">
              <div className="recent-posts">
                <h3>Recent Posts</h3>
                {recentPosts.map(post => (
                  <Link href={`/blog/${post.id}`} key={post.id} className="recent-post-card">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={100}
                      height={100}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                    <div className="post-info">
                      <h4>{post.title}</h4>
                      <span className="date">{post.date}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default BlogDetail;