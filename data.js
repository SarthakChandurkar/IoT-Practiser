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
      question: "What is an eXMPPle of a topic for sending temperature data of the living room?",
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
      question: "What is an eXMPPle of a subscription that matches topics with an arbitrary value at a specific hierarchy level?",
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
        topic: "CoAP and XMPP",
        important: true,
        week: 2
      },
      {
        question: "For What types of nodes the CoAP is used?",
        answer: "Nodes which are resource(Energy, Power) constrained.",
        topic: "CoAP and XMPP",
        important: false,
        week: 2
      },
      {
        question: "Which type of Transfer protocol is CoAP?",
        answer: "Web Transfer Protocol for Constrained nodes",
        topic: "CoAP and XMPP",
        important: false,
        week: 2
      },
      {
        question: "CoAP is designed for?",
        answer: "Designed for Machine to Machine (M2M) applications such as smart energy and building automation.",
        topic: "CoAP and XMPP",
        important: false,
        week: 2
      },
      {
        question: "Which type of model is CoAP between end-points?",
        answer: "Request-Response Model",
        topic: "CoAP and XMPP",
        important: true,
        week: 2
      },
      {
        question: "How does Client-Server interaction occur in the CoAP protocol?",
        answer: "In CoAP protocol, Client‐Server interaction is asynchronous over a datagram oriented transport protocol such as UDP.",
        topic: "CoAP and XMPP",
        important: true,
        week: 2
      },
      {
        question: "CoAP works on top of which protocol for client-server interaction?",
        answer: "UDP protocol",
        topic: "CoAP and XMPP",
        important: false,
        week: 2
      },
      {
        question: "What type of protocol is the Constrained Application Protocol (CoAP)?",
        answer: "Session Layer Protocol",
        topic: "CoAP and XMPP",
        important: true,
        week: 2
      },
      {
        question: "What is the Aim of CoAP?",
        answer: "To provide lightweight RESTful (HTTP) Interface.",
        topic: "CoAP and XMPP",
        important: false,
        week: 2
      },
      {
        question: "What is the standard interface between HTTP Client and servers?",
        answer: "REST(Representational State Transfer)",
        topic: "CoAP and XMPP",
        important: false,
        week: 2
      },
      {
        question: "What is difference between REST and CoAP?",
        answer: "REST is resource hungry and CoAP is lightweight and can be used in constrained nodes IoT environment.",
        topic: "CoAP and XMPP",
        important: true,
        week: 2
      },
      {
        question: "CoAP architecture is sub-divided into which two sub-layers?",
        answer: "Messaging sub-Layer and Request-Response sub-Layer",
        topic: "CoAP and XMPP",
        important: true,
        week: 2
      },
      {
        question: "What sub-layer is responsible for reliability and duplication of messages in the CoAP protocol?",
        answer: "Messaging Sub-layer",
        topic: "CoAP and XMPP",
        important: true,
        week: 2
      },
      {
        question: "What sub-layer is responsible for communication in the CoAP protocol?",
        answer: "Request/Response",
        topic: "CoAP and XMPP",
        important: true,
        week: 2
      },
      {
        question: "What are the messaging modes in CoAP?",
        answer: "Confirmable, Non‐confirmable, Piggyback, Separate",
        topic: "CoAP and XMPP",
        important: false,
        week: 2
      },
      {
        question: "Comment of Confirmable type of messaging mode?",
        answer: "client sends the request to server and server sends back an acknowledgment.",
        topic: "CoAP and XMPP",
        important: false,
        week: 2
      },
      {
        question: "Comment of Non-Confirmable type of messaging mode?",
        answer: "client sends the request to server and server does not sends back an acknowledgment.",
        topic: "CoAP and XMPP",
        important: false,
        week: 2
      },
      {
        question: "Which messaging mode in CoAP is used for client/server direct communication where the server sends its response within the acknowledgment message?",
        answer: "Piggyback mode",
        topic: "CoAP and XMPP",
        important: true,
        week: 2
      },
      {
        question: "What mode in the CoAP protocol is used when the server sends an acknowledgment after receiving the data, but the actual response is sent separately and may take some time?",
        answer: "Separate Mode",
        topic: "CoAP and XMPP",
        important: true,
        week: 2
      },
      {
        question: "What is the full form of XMPP?",
        answer: "Extensible Messaging Presence Protocol.",
        topic: "CoAP and XMPP",
        important: true,
        week: 2
      },
      {
        question: "XMPP is based on which protocol?",
        answer: "XML(Extensible Markup Language) Protocol",
        topic: "CoAP and XMPP",
        important: true,
        week: 2
      },
      {
        question: "XMPP is communication protocol for?",
        answer: "Message-oriented middleware",
        topic: "CoAP and XMPP",
        important: true,
        week: 2
      },
      {
        question: "What is difference between XML and XMPP?",
        answer: "XML is real-time exchange of unstructured data while XMPP is real-time exchange of structured data.",
        topic: "CoAP and XMPP",
        important: false,
        week: 2
      },
      {
        question: "What actually XMPP discover?",
        answer: "Discovery of Services residing locally or over the network and availability of information of these services.",
        topic: "CoAP and XMPP",
        important: false,
        week: 2
      },
      {
        question: "Does XMPP discover services over the network if even if there is a firewall?",
        answer: "Yes.",
        topic: "CoAP and XMPP",
        important: false,
        week: 2
      },
      {
        question: "XMPP is centralized or decentralised? What actually it signifies?",
        answer: "XMPP is decentralised and anyone can run their own XMPP server.",
        topic: "CoAP and XMPP",
        important: true,
        week: 2
      },
      {
        question: "What is meant by Open Standard Protocol? Does XMPP an Open standard Protocol?",
        answer: "No royalties or granted permissions are required to implement these specifications Yes XMPP an Open Standard protocol.",
        topic: "CoAP and XMPP",
        important: false,
        week: 2
      },
      {
        question: "Which type of architecture does XMPP uses?",
        answer: "client‐server architecture",
        topic: "CoAP and XMPP",
        important: true,
        week: 2
      },
      {
        question: "What are the core XMPP technologies?",
        answer: "Core, Jingle, PubSub, Multi-user chat, BOSH",
        topic: "CoAP and XMPP",
        important: false,
        week: 2
      },
      {
        question: "What is Jingle used for?",
        answer: "multimedia signalling for voice, video, file transfer",
        topic: "CoAP and XMPP",
        important: true,
        week: 2
      },
      {
        question: "What is BOSH used for?",
        answer: "HTTP binding for XMPP",
        topic: "CoAP and XMPP",
        important: true,
        week: 2
      },
      {
        question: "What is PubSub used for?",
        answer: "alerts and notifications for data syndication",
        topic: "CoAP and XMPP",
        important: true,
        week: 2
      },
      {
        question: "Does XMPP Supports QoS?",
        answer: "No",
        topic: "CoAP and XMPP",
        important: false,
        week: 2
      },
      {
        question: "Does XMPP provides text based communication? Why?",
        answer: "No. Because it induces higher network overhead.",
        topic: "CoAP and XMPP",
        important: false,
        week: 2
      },
      {
        question: "In XMPP, binary data must be encoded to which format before transmission?",
        answer: "base64",
        topic: "CoAP and XMPP",
        important: false,
        week: 2
      },
      {
        question: "What is full form of AMQP?",
        answer: "Advanced Message Queuing Protocol",
        topic: "AMQP",
        important: true,
        week: 2
      },
      {
        question: "Does AMQP an open Standard protocol?",
        answer: "Yes",
        topic: "AMQP",
        important: false,
        week: 2
      },
      {
        question: "What is the common use case of AMQP?",
        answer: "Passing business messages between applications and organizations",
        topic: "AMQP",
        important: true,
        week: 2
      },
      {
        question: "AMQP Connects between?",
        answer: "Systems and business processes.",
        topic: "AMQP",
        important: false,
        week: 2
      },
      {
        question: "Which type of application layer protocol does AMQP is?",
        answer: "Binary application layer protocol",
        topic: "AMQP",
        important: false,
        week: 2
      },
      {
        question: "What is a basic Unit of data in AMQP?",
        answer: "frame",
        topic: "AMQP",
        important: true,
        week: 2
      },
      {
        question: "AMQP Connects across which features?",
        answer: "Organizations, Technologies, Time, Space",
        topic: "AMQP",
        important: false,
        week: 2
      },
      {
        question: "What are the different message delivery guarantees of AMQP?",
        answer: "At-most-once, At-least-one, Exactly-once",
        topic: "AMQP",
        important: true,
        week: 2
      },
      {
        question: "How many type of frames exists in AMQP?",
        answer: "Nine",
        topic: "AMQP",
        important: true,
        week: 2
      },
      {
        question: "Which are the different frames exists in AMQP?",
        answer: "Open, Close, Begin, End, Attach, Detach, Transfer, Flow, Disposition",
        topic: "AMQP",
        important: false,
        week: 2
      },
      {
        question: "For what purpose does the Transfer data frame type used in AMQP?",
        answer: "for sending actual messages",
        topic: "AMQP",
        important: false,
        week: 2
      },
      {
        question: "For what purpose does the Flow data frame type used in AMQP?",
        answer: "Controls message flow rate",
        topic: "AMQP",
        important: false,
        week: 2
      },
      {
        question: "For what purpose does the Disposition data frame type used in AMQP?",
        answer: "informs the changes in state of transfer",
        topic: "AMQP",
        important: true,
        week: 2
      },
      {
        question: "What are the server components of AMQP?",
        answer: "Exchange, Queue, Bindings",
        topic: "AMQP",
        important: true,
        week: 2
      },
      {
        question: "What is the Task of exchange server component of AMQP?",
        answer: "Receives messages and routes them to Queues",
        topic: "AMQP",
        important: true,
        week: 2
      },
      {
        question: "What is the Task of queue server component of AMQP?",
        answer: "separate queue for separate business processes.",
        topic: "AMQP",
        important: false,
        week: 2
      },
      {
        question: "What is the Task of Bindings server component of AMQP?",
        answer: "Rules for distributing messages (who can access what message, destination of the message)",
        topic: "AMQP",
        important: true,
        week: 2
      },
      {
        question: "What are the different types of exchange server components of AMQP?",
        answer: "Direct, Fan-out, Topic, Header",
        topic: "AMQP",
        important: false,
        week: 2
      },
      {
        question: "In which type of network the IEEE 802.15.4 standard is used?",
        answer: "Low data-rate WPAN",
        topic: "IEEE 802.15.4 & ZigBee",
        important: true,
        week: 2
      },
      {
        question: "State true or false\nDeveloped for low‐data‐rate monitoring and control applications and extended‐life low‐power‐consumption uses.",
        answer: "True",
        topic: "IEEE 802.15.4 & ZigBee",
        important: true,
        week: 2
      },
      {
        question: "State true or false\nDeveloped for low‐data‐rate monitoring and control applications and extended‐life high‐power‐consumption uses.",
        answer: "False",
        topic: "IEEE 802.15.4 & ZigBee",
        important: true,
        week: 2
      },
      {
        question: "IEEE 802.15.4 operates in Which frequency ranges?",
        answer: "It operates in ISM band",
        topic: "IEEE 802.15.4 & ZigBee",
        important: false,
        week: 2
      },
      {
        question: "Which layers of OSI model does IEEE 802.15.4 works in?",
        answer: "Physical and Data link layer",
        topic: "IEEE 802.15.4 & ZigBee",
        important: true,
        week: 2
      },
      {
        question: "Which layers does IEEE 802.15.4 standard uses?",
        answer: "PHY and MAC",
        topic: "IEEE 802.15.4 & ZigBee",
        important: true,
        week: 2
      },
      {
        question: "Which layers does IEEE 802.15.4 uses to communicate with all upper layers?",
        answer: "Logical link control(LLC) and service specific convergence sub-layer",
        topic: "IEEE 802.15.4 & ZigBee",
        important: true,
        week: 2
      },
      {
        question: "Which type of modulation technique does IEEE 802.15.4 uses?",
        answer: "Direct sequence spread spectrum (DSSS)",
        topic: "IEEE 802.15.4 & ZigBee",
        important: true,
        week: 2
      },
      {
        question: "IEEE 802.15.4 is highly tolerant of?",
        answer: "noise and interference",
        topic: "IEEE 802.15.4 & ZigBee",
        important: false,
        week: 2
      },
      {
        question: "State true or false?\nIEEE 802.15.4 offers link reliability improvement mechanisms",
        answer: "True",
        topic: "IEEE 802.15.4 & ZigBee",
        important: false,
        week: 2
      },
      {
        question: "Low-Speed versions of IEEE 802.15.4 uses which type of digital modulation scheme?",
        answer: "Binary Phase Shift Keying (BPSK)",
        topic: "IEEE 802.15.4 & ZigBee",
        important: false,
        week: 2
      },
      {
        question: "State true or false\nHigh‐speed versions of IEEE 802.15.4 use Binary Phase Shift Keying (BPSK).",
        answer: "False",
        topic: "IEEE 802.15.4 & ZigBee",
        important: false,
        week: 2
      },
      {
        question: "High-Speed versions of IEEE 802.15.4 uses which type of digital modulation scheme?",
        answer: "Offset‐quadrature phase‐shift keying (O‐QPSK)",
        topic: "IEEE 802.15.4 & ZigBee",
        important: false,
        week: 2
      },
      {
        question: "State true or false\nHigh data‐rate versions use offset‐quadrature phase‐shift keying (O‐QPSK).",
        answer: "True",
        topic: "IEEE 802.15.4 & ZigBee",
        important: false,
        week: 2
      },
      {
        question: "Which Carrier Sense Multiple Access(CSMA) technique does IEEE 802.15.4 uses?",
        answer: "CSMA/CA",
        topic: "IEEE 802.15.4 & ZigBee",
        important: false,
        week: 2
      },
      {
        question: "What is known as the technique allows multiple users or nodes interference‐free access to the same channel at different times?",
        answer: "Multiplexing",
        topic: "IEEE 802.15.4 & ZigBee",
        important: false,
        week: 2
      },
      {
        question: "Which type of transmission path does IEEE 802.15.4 needs to work at better efficiency?",
        answer: "Line of Sight (LOS)",
        topic: "IEEE 802.15.4 & ZigBee",
        important: false,
        week: 2
      },
      {
        question: "Which types of network topologies IEEE 802.15.4 defined?",
        answer: "Star and Mesh",
        topic: "IEEE 802.15.4 & ZigBee",
        important: false,
        week: 2
      },
      {
        question: "What are the different types of IEEE 802.15.4 devices?",
        answer: "FFD and RFD",
        topic: "IEEE 802.15.4 & ZigBee",
        important: true,
        week: 2
      },
      {
        question: "Can RFD talk with RFD?",
        answer: "No",
        topic: "IEEE 802.15.4 & ZigBee",
        important: true,
        week: 2
      },
      {
        question: "Can FFD talk with FFD and RFD both?",
        answer: "Yes",
        topic: "IEEE 802.15.4 & ZigBee",
        important: true,
        week: 2
      },
      {
        question: "How many types of IEEE 802.15.4 frames exists? Which are they?",
        answer: "5 types: Beacon MAC Command Acknowledgement Data",
        topic: "IEEE 802.15.4 & ZigBee",
        important: false,
        week: 2
      },
      {
        question: "What are different types of networks IEEE 802.15.4 have?",
        answer: "Beacon Enabled networks and Non-beacon enabled networks",
        topic: "IEEE 802.15.4 & ZigBee",
        important: true,
        week: 2
      },
      {
        question: "What are the beacon messages?",
        answer: "The message which alerts the whole network nodes.",
        topic: "IEEE 802.15.4 & ZigBee",
        important: false,
        week: 2
      },
      {
        question: "Beacon messages are managed by?",
        answer: "PAN Coordinator",
        topic: "IEEE 802.15.4 & ZigBee",
        important: true,
        week: 2
      },
      {
        question: "State true or false\nIn beacon enabled networks, Data‐frames sent via unslotted CSMA/CA with a super frame structure managed by PAN coordinator",
        answer: "False",
        topic: "IEEE 802.15.4 & ZigBee",
        important: true,
        week: 2
      },
      {
        question: "Which Carrier Sense Multiple Access(CSMA) technique does beacon enabled networks uses for data-frame transfer?",
        answer: "Slotted CSMA/CA",
        topic: "IEEE 802.15.4 & ZigBee",
        important: true,
        week: 2
      },
      {
        question: "Which Carrier Sense Multiple Access(CSMA) technique does non-beacon enabled networks uses for data-frame transfer?",
        answer: "unslotted CSMA/CA",
        topic: "IEEE 802.15.4 & ZigBee",
        important: true,
        week: 2
      },
      {
        question: "State true or false\nBeacons used for synchronization & association of other nodes with the coordinator",
        answer: "True",
        topic: "IEEE 802.15.4 & ZigBee",
        important: true,
        week: 2
      },
      {
        question: "What is the scope of messages in beacon enabled networks?",
        answer: "Whole network",
        topic: "IEEE 802.15.4 & ZigBee",
        important: false,
        week: 2
      },
      {
        question: "Beacon enabled networks felicitates the ........... communication amongst nodes?",
        answer: "decentralised",
        topic: "IEEE 802.15.4 & ZigBee",
        important: false,
        week: 2
      },
      {
        question: "For what purpose the beacons are used?",
        answer: "link layer discovery (Finding other device)",
        topic: "IEEE 802.15.4 & ZigBee",
        important: true,
        week: 2
      },
      {
        question: "IEEE 802.15.4 Primarily used which network configuration?",
        answer: "Mesh",
        topic: "IEEE 802.15.4 & ZigBee",
        important: true,
        week: 2
      },
      {
        question: "Zigbee is an enhancement over which standard?",
        answer: "IEEE 802.15.4",
        topic: "IEEE 802.15.4 & ZigBee",
        important: true,
        week: 2
      },
      {
        question: "Zigbee protocol is defined on which layers of OSI model?",
        answer: "network layer and above",
        topic: "IEEE 802.15.4 & ZigBee",
        important: true,
        week: 2
      },
      {
        question: "Zigbee uses layer 3 and 4 to define?",
        answer: "additional communication enhancements",
        topic: "IEEE 802.15.4 & ZigBee",
        important: true,
        week: 2
      },
      {
        question: "Which is most popular use case of Zigbee is?",
        answer: "Wireless sensor networks using mesh topology",
        topic: "IEEE 802.15.4 & ZigBee",
        important: false,
        week: 2
      },
      {
        question: "What are the components of Zigbee?",
        answer: "ZDO and APS",
        topic: "IEEE 802.15.4 & ZigBee",
        important: true,
        week: 2
      },
      {
        question: "Zigbee commonly used for which network topology?",
        answer: "Mesh",
        topic: "IEEE 802.15.4 & ZigBee",
        important: true,
        week: 2
      },
      {
        question: "Explain the work of ZDO(Zigbee Device Object)?",
        answer: "Device management, Security, Policies",
        topic: "IEEE 802.15.4 & ZigBee",
        important: false,
        week: 2
      },
      {
        question: "Explain the work of APS(Application Support Sub-layer)?",
        answer: "Interfacing and control services, bridge between network and other layers",
        topic: "IEEE 802.15.4 & ZigBee",
        important: false,
        week: 2
      },
      {
        question: "What are the components of Zigbee?",
        answer: "Zigbee Coordinator (ZC), Zigbee Router (ZR), Zigbee End Device (ZED)",
        topic: "IEEE 802.15.4 & ZigBee",
        important: false,
        week: 2
      },
      {
        question: "The ........ forms the root of the ZigBee network tree and might act as a bridge between networks.",
        answer: "Coordinator",
        topic: "IEEE 802.15.4 & ZigBee",
        important: true,
        week: 2
      },
      {
        question: "There is a multiple ZigBee Coordinator in each network, which originally initiates the network.",
        answer: "False",
        topic: "IEEE 802.15.4 & ZigBee",
        important: true,
        week: 2
      },
      {
        question: "Coordinator in Zigbee protocol stores information about the network .... it and ..... it.",
        answer: "under outside",
        topic: "IEEE 802.15.4 & ZigBee",
        important: true,
        week: 2
      },
      {
        question: "How coordinator in zigbee protocol acts for security keys?",
        answer: "Trust center & repository",
        topic: "IEEE 802.15.4 & ZigBee",
        important: false,
        week: 2
      },
      {
        question: "In zigbee, ........... are Capable of running applications, as well as relaying information between nodes connected to it.",
        answer: "routers",
        topic: "IEEE 802.15.4 & ZigBee",
        important: true,
        week: 2
      },
      {
        question: "In zigbee, ....... contains just enough functionality to talk to the parent node, and it cannot relay data from other devices.",
        answer: "End device",
        topic: "IEEE 802.15.4 & ZigBee",
        important: true,
        week: 2
      },
      {
        question: "In zigbee networks, end device enhances the battery life by?",
        answer: "asleep node for significant amount of time",
        topic: "IEEE 802.15.4 & ZigBee",
        important: true,
        week: 2
      },
      {
        question: "Among ZC, ZR and ZED which requires device requires less cost and memory?",
        answer: "ZED",
        topic: "IEEE 802.15.4 & ZigBee",
        important: false,
        week: 2
      },
      {
        question: "Zigbee's network layer uses which algorithm for routing?",
        answer: "Ad Hoc On‐Demand Distance Vector (AODV) routing",
        topic: "IEEE 802.15.4 & ZigBee",
        important: true,
        week: 2
      },
      {
        question: "What Ad Hoc On‐Demand Distance Vector (AODV) routing calculates?",
        answer: "low-cost path",
        topic: "IEEE 802.15.4 & ZigBee",
        important: true,
        week: 2
      },
      {
        question: "In zigbee network layer, How low-cost path is informed to the requesting device upon discovery of destination node/device?",
        answer: "unicast messaging",
        topic: "IEEE 802.15.4 & ZigBee",
        important: true,
        week: 2
      }                            
  ];
  