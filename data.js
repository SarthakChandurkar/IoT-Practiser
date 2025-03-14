const data = [
    {
      question: "What is Full form of MQTT?",
      answer: "Message Queue Telemetry Transport.",
      topic: "MQTT",
      important: false,
      week: 2
    },
    {
      question: "What type of message protocol does MQTT is?",
      answer: "Publish-Subscribe",
      topic: "MQTT",
      important: true,
      week: 2
    },
    {
      question: "MQTT is use in Conjunction with which protocol?",
      answer: "TCP/IP",
      topic: "MQTT",
      important: false,
      week: 2
    },
    {
      question: "For what connectivity MQTT was designed?",
      answer: "Designed to provide connectivity (mostly embedded) between applications and middle‐wares on one side and networks and communications on the other side.",
      topic: "MQTT",
      important: true,
      week: 2
    },
    {
      question: "Which component controls the publish-subscribe message pattern?",
      answer: "Message Broker",
      topic: "MQTT",
      important: true,
      week: 2
    },
    {
      question: "What is updated in the form of messages and distributed by the message broker to the client?",
      answer: "Topic",
      topic: "MQTT",
      important: true,
      week: 2
    },
    {
      question: "What is MQTT designed for?",
      answer: "Remote connections, Limited bandwidth, Small‐code footprint",
      topic: "MQTT",
      important: false,
      week: 2
    },
    {
      question: "What do brokers classify sensor data into?",
      answer: "Topics",
      topic: "MQTT",
      important: false,
      week: 2
    },
    {
      question: "What are the MQTT Methods?",
      answer: "Connect, Disconnect, Publish, Subscribe, Unsubscribe",
      topic: "MQTT",
      important: false,
      week: 2
    },
    {
      question: "What type of mechanism enables messages to be pushed to clients in a publish/subscribe model?",
      answer: "Event-Driven",
      topic: "MQTT",
      important: true,
      week: 2
    },
    {
      question: "What serves as the routing information for the broker?",
      answer: "Topic",
      topic: "MQTT",
      important: true,
      week: 2
    },
    {
      question: "What is a topic in the context of publish/subscribe systems?",
      answer: "A topic is a simple string that can have more hierarchy levels, which are separated by a slash.",
      topic: "MQTT",
      important: true,
      week: 2
    },
    {
      question: "What is an example of a topic for sending temperature data of the living room?",
      answer: "house/living‐room/temperature.",
      topic: "MQTT",
      important: false,
      week: 2
    },
    {
      question: "What can a client use instead of subscribing to an exact topic?",
      answer: "Wildcard",
      topic: "MQTT",
      important: false,
      week: 2
    },
    {
      question: "What is an example of a subscription that matches topics with an arbitrary value at a specific hierarchy level?",
      answer: "house/+/wildcard",
      topic: "MQTT",
      important: false,
      week: 2
    },
    {
      question: "What does the plus sign represent in a topic hierarchy?",
      answer: "Single level wild card",
      topic: "MQTT",
      important: true,
      week: 2
    },
    {
      question: "What allows subscribing to all underlying hierarchy levels in a topic hierarchy?",
      answer: "Multilevel wildcard (#)",
      topic: "MQTT",
      important: true,
      week: 2
    },
    {
      question: "What is the extension of MQTT that uses encryption based on lightweight attribute-based encryption?",
      answer: "Secure MQTT",
      topic: "MQTT",
      important: true,
      week: 2
    },
    {
      question: "What does Secure MQTT use based on lightweight attribute-based encryption?",
      answer: "Encryption",
      topic: "MQTT",
      important: false,
      week: 2
    },
    {
      question: "What are the main stages of the SMQTT in general?",
      answer: "In general, the SMQTT algorithm consists of four main stages: setup, encryption, publish and decryption.",
      topic: "MQTT",
      important: true,
      week: 2
    },
    {
      question: "In which phase of SMQTT do subscribers and publishers register to the broker and obtain a master secret key?",
      answer: "Setup phase",
      topic: "MQTT",
      important: true,
      week: 2
    },
    {
      question: "In which phase is the data encrypted and sent to the subscribers by the broker?",
      answer: "Encryption Phase",
      topic: "MQTT",
      important: false,
      week: 2
    },
    {
      question: "In which phase is the data finally decrypted at the subscriber end using the master secret key?",
      answer: "Decryption Phase",
      topic: "MQTT",
      important: false,
      week: 2
    },
    {
      question: "On the basis of Functionality MQTT comes under which type of protocol?",
      answer: "Data protocols",
      topic: "MQTT",
      important: true,
      week: 2
    },
    {
        question: "What is full form of CoAP",
        answer: "Constrained Application Protocol",
        topic: "CoAP and XAMP",
        important: true,
        week: 2
      },
      {
        question: "For What types of nodes the CoAP is used?",
        answer: "Nodes which are resource(Energy, Power) constrained.",
        topic: "CoAP and XAMP",
        important: false,
        week: 2
      },
      {
        question: "Which type of Transfer protocol is CoAP?",
        answer: "Web Transfer Protocol for Constrained nodes",
        topic: "CoAP and XAMP",
        important: false,
        week: 2
      },
      {
        question: "CoAP is designed for?",
        answer: "Designed for Machine to Machine (M2M) applications such as smart energy and building automation.",
        topic: "CoAP and XAMP",
        important: false,
        week: 2
      },
      {
        question: "Which type of model is CoAP between end-points?",
        answer: "Request-Response Model",
        topic: "CoAP and XAMP",
        important: true,
        week: 2
      },
      {
        question: "How does Client-Server interaction occur in the CoAP protocol?",
        answer: "In CoAP protocol, Client‐Server interaction is asynchronous over a datagram oriented transport protocol such as UDP.",
        topic: "CoAP and XAMP",
        important: true,
        week: 2
      },
      {
        question: "CoAP works on top of which protocol for client-server interaction?",
        answer: "UDP protocol",
        topic: "CoAP and XAMP",
        important: false,
        week: 2
      },
      {
        question: "What type of protocol is the Constrained Application Protocol (CoAP)?",
        answer: "Session Layer Protocol",
        topic: "CoAP and XAMP",
        important: true,
        week: 2
      },
      {
        question: "What is the Aim of CoAP?",
        answer: "To provide lightweight RESTful (HTTP) Interface.",
        topic: "CoAP and XAMP",
        important: false,
        week: 2
      },
      {
        question: "What is the standard interface between HTTP Client and servers?",
        answer: "REST(Representational State Transfer)",
        topic: "CoAP and XAMP",
        important: false,
        week: 2
      },
      {
        question: "What is difference between REST and CoAP?",
        answer: "REST is resource hungry and CoAP is lightweight and can be used in constrained nodes IoT environment.",
        topic: "CoAP and XAMP",
        important: true,
        week: 2
      },
      {
        question: "CoAP architecture is sub-divided into which two sub-layers?",
        answer: "Messaging sub-Layer and Request-Response sub-Layer",
        topic: "CoAP and XAMP",
        important: true,
        week: 2
      },
      {
        question: "What sub-layer is responsible for reliability and duplication of messages in the CoAP protocol?",
        answer: "Messaging Sub-layer",
        topic: "CoAP and XAMP",
        important: true,
        week: 2
      },
      {
        question: "What sub-layer is responsible for communication in the CoAP protocol?",
        answer: "Request/Response",
        topic: "CoAP and XAMP",
        important: true,
        week: 2
      },
      {
        question: "What are the messaging modes in CoAP?",
        answer: "CoAP has four messaging modes: Confirmable, Non‐confirmable, Piggyback, Separate",
        topic: "CoAP and XAMP",
        important: false,
        week: 2
      },
      {
        question: "Comment of Confirmable type of messaging mode?",
        answer: "In confirmable messaging mode client sends the request to server and server sends back an acknowledgment.",
        topic: "CoAP and XAMP",
        important: false,
        week: 2
      },
      {
        question: "Comment of Non-Confirmable type of messaging mode?",
        answer: "In Non-confirmable messaging mode client sends the request to server and server does not sends back an acknowledgment.",
        topic: "CoAP and XAMP",
        important: false,
        week: 2
      },
      {
        question: "Which messaging mode in CoAP is used for client/server direct communication where the server sends its response within the acknowledgment message?",
        answer: "Piggyback mode",
        topic: "CoAP and XAMP",
        important: true,
        week: 2
      },
      {
        question: "What mode in the CoAP protocol is used when the server sends an acknowledgment after receiving the data, but the actual response is sent separately and may take some time?",
        answer: "Separate Mode",
        topic: "CoAP and XAMP",
        important: true,
        week: 2
      }      
  ];
  