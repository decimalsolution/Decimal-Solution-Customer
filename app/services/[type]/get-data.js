export const getData = (type) => {
  switch (type) {
    case "website-development":
      return {
        title: "Website Development",
        image: "/services-cover-images/web-development.png",
        sections: [
          {
            title: "Website Development",
            description:
              "Improving your online presence through the development of custom websites that represent your company. Our talented developers build beautifully designed, user-friendly websites while ensuring peak speed and responsiveness for a perfect online experience.",
            image: "/website-development/image-1.png",
          },
          {
            title: "CRM Based Solutions",
            description:
              "Solutions for managing customer relationships that have been designed to improve interactions, simplify processes, and increase overall company efficiency while building deep and enduring client connections.",
            image: "/website-development/image-2.png",
          },
          {
            title: "Health Based Solutions",
            description:
              "Complete and innovative ideas that improve patient outcomes, improve medical processes, and improve healthcare operations for a more effectively, stronger healthcare environment.",
            image: "/website-development/image-3.png",
          },
          {
            title: "E-Commerce Solutions",
            description:
              "Use our comprehensive e-commerce solutions to completely change your online business. We provide specific solutions to improve the customer's purchasing experience and improve your online business, ranging from user-friendly interfaces to secure payment methods.",
            image: "/website-development/image-4.png",
          },
        ],
      };
    case "mobile-app-development":
      return {
        title: "Mobile App Development",
        image: "/services-cover-images/mobile-app-development.png",
        sections: [
          {
            title: "Android App Development",
            description:
              "Creating state-of-the-art mobile applications for Android with smooth operation, user-friendly UI, and creative features that respond to a wide range of user requirements.",
            image: "/mobile-app-development/image-1.png",
          },
          {
            title: "iOS Development",
            description:
              "Customized apps for iOS can enhance your visibility on the internet. Using the most recent iOS technology to provide lag-free and simple experiences, our skilled developers maximize performance on all Apple devices.",
            image: "/mobile-app-development/image-2.png",
          },
          {
            title: "Native Application Development",
            description:
              "We create dependable, high-performing apps that are suited to certain platforms by fully using native technology, ensuring the best possible user experiences and functionalities.",
            image: "/mobile-app-development/image-3.png",
          },
          {
            title: "Mobile App Development",
            description:
              "Using personalized mobile applications, your ideas may become reality. Our talented developers guarantee creative, approachable solutions that satisfy a range of requirements and provide a flawless mobile experience.",
            image: "/mobile-app-development/image-4.png",
          },
        ],
      };
    case "digital-marketing":
      return {
        title: "Digital Marketing",
        image: "/services-cover-images/digital-marketing.png",
        sections: [
          {
            title: "Social Media Marketing",
            description:
              "Boost the online visibility of your company with clever and engaging social media marketing. Our customized solutions promote brand visibility, audience engagement, and company expansion across a variety of media.",
            image: "/digital-marketing/image-1.png",
          },
          {
            title: "SEO Services",
            description:
              "Enhancing your online visibility and ranking with our strategic search engine optimization solutions. We optimize your digital presence for increased discoverability and organic traffic growth.",
            image: "/digital-marketing/image-2.png",
          },
          {
            title: "Social Advertising Campaign",
            description:
              "Increase brand awareness and interaction on social media by running focused ads. Our campaigns provide significant outcomes, growing your audience and optimizing return on investment across media.",
            image: "/digital-marketing/image-3.png",
          },
          {
            title: "Pay Per Click Advertising",
            description:
              "Increasing your internet presence and precisely directing targeted traffic. With our PPC campaigns, you may increase the impact of your digital marketing while maintaining a reasonable cost.",
            image: "/digital-marketing/image-4.png",
          },
        ],
      };
    case "graphics-designing":
      return {
        title: "Graphic Designing",
        image: "/services-cover-images/graphic-designing.png",
        sections: [
          {
            title: "UI/UX Designing",
            description:
              "Using our skilled design team, we can elevate digital experiences. We create visually appealing and user-focused interfaces which ensure smooth and enjoyable interactions for maximum user pleasure.",
            image: "/graphic-designing/image-1.png",
          },
          {
            title: "Corporate Branding",
            description:
              "Our comprehensive approach include developing unified graphic identities that capture the essence of your company. We concentrate on building a memorable and significant brand presence across a range of channels, from designing unique logos to developing a unified brand language. To make sure your business identity sticks out in the competitive marketplace, our design specialists place a high priority on aesthetics, usefulness, and brand resonance.",
            image: "/graphic-designing/image-3.png",
          },
          {
            title: "Web Designing",
            description:
              "Converting ideas into aesthetically beautiful websites. Our skilled developers create user-focused interfaces which ensure your audience will have a smooth and interesting online experience.",
            image: "/graphic-designing/image-4.png",
          },
        ],
      };
    case "ar-vr":
      return {
        title: "AR/VR Game Development",
        image: "/services-cover-images/ar-vr.png",
        sections: [
          {
            title: "VUFORIA AR",
            description:
              "Unlocking the potential of augmented reality with Vuforia, a cutting-edge platform that empowers developers to create immersive and interactive AR experiences for various applications and industries.",
            image: "/ar-vr/image-1.png",
          },
          {
            title: "AR Foundation",
            description:
              "A versatile development framework that harnesses the power of augmented reality, enabling seamless creation of AR experiences across different platforms and devices for immersive and engaging applications.",
            image: "/ar-vr/image-2.png",
          },
          {
            title: "Google AR Core, Easy AR",
            description:
              "By utilizing innovative augmented reality technology, these platforms enable developers to produce smooth and captivating augmented reality experiences, paving the way for interactive apps across a range of platforms.",
            image: "/ar-vr/image-3.png",
          },
          {
            title: "Location Marker Based Augmentation",
            description:
              "Enhancing augmented reality experiences by utilizing location markers, providing context-aware and interactive content overlays in real-world environments for a dynamic and engaging user experience.",
            image: "/ar-vr/image-4.png",
          },
        ],
      };
    case "erp":
      return {
        title: "ERP and Business Solutions",
        image: "/services-cover-images/erp.png",
        sections: [
          {
            title: "Custom Business Solutions",
            description:
              "Software for enterprise resource planning, or ERP, is becoming more and more necessary for handling corporate requirements. We are prepared to offer the best ERP systems to effectively manage departments like as finance, HR, supply chain, procurement, manufacturing, inventory, marketing, etc. Thanks to the experience and enthusiasm of our staff. It will simplify the management of your daily company operations and free up space for increased productivity",
            image: "/erp/image-1.png",
          },
          {
            title: "Real Estate Softwares",
            description:
              "Providing real estate agents cutting-edge digital solutions for sales, property administration, and efficient operations to boost productivity and customer satisfaction in the sector.",
            image: "/erp/image-2.png",
          },
          {
            title: "Accounting Softwares",
            description:
              "Financial management may be made more efficient by using reliable and user-friendly accounting software. Our solutions provide accurate, efficient, and secure financial processes while meeting a wide range of corporate demands.",
            image: "/erp/image-3.png",
          },
        ],
      };
  }
};
