
---
enable: true

title: "Let's Discuss Your Technology Requirements"

description: "Have a database or IT infrastructure challenge? Tell us about your requirements. The One13Tech team will help you identify the right solution."

officeHours: "Business Hours: Monday - Saturday"

formTitle: "Send Us Your Enquiry"

formDescription: "Share your requirements with us. Our team will get in touch to discuss how we can help."

form:
  emailSubject: "New Business Enquiry - One13Tech"

  submitButton:
    enable: true
    label: "Submit Enquiry"
    class: "w-full justify-center rounded-md"
    hoverEffect: "magnetic-text-flip"
    variant: "fill"

  note: |
    Your information will be used only to respond to your enquiry.

  inputs:
    - label: "Your Name"
      name: "Name"
      placeholder: "Enter your full name"
      required: true
      halfWidth: true

    - label: "Business Email"
      name: "Email"
      placeholder: "Enter your business email"
      type: "email"
      required: true
      halfWidth: true

    - label: "Company Name"
      name: "Company"
      placeholder: "Enter your company name"
      halfWidth: true

    - label: "Phone Number"
      name: "Phone"
      placeholder: "Enter your contact number"
      type: "tel"
      halfWidth: true

    - label: "Service Required"
      name: "Service"
      placeholder: "Select a service"
      required: true
      dropdown:
        type: "search"
        search:
          placeholder: "Search our services"
        items:
          - label: "Database Administration & Managed Services"
            value: "Database Administration & Managed Services"
          - label: "Database Migration & Modernization"
            value: "Database Migration & Modernization"
          - label: "Database Performance Optimization"
            value: "Database Performance Optimization"
          - label: "Database Security & Auditing"
            value: "Database Security & Auditing"
          - label: "High Availability & Disaster Recovery"
            value: "High Availability & Disaster Recovery"
          - label: "Cloud & Infrastructure Consulting"
            value: "Cloud & Infrastructure Consulting"
          - label: "Database Training"
            value: "Database Training"
          - label: "Technical Staffing & Recruitment"
            value: "Technical Staffing & Recruitment"
          - label: "Other IT Requirements"
            value: "Other IT Requirements"

    - label: "Database Technology"
      name: "Technology"
      placeholder: "Select your database technology"
      dropdown:
        type: "search"
        search:
          placeholder: "Search technology"
        items:
          - label: "MongoDB"
            value: "MongoDB"
          - label: "PostgreSQL"
            value: "PostgreSQL"
          - label: "Sybase ASE"
            value: "Sybase ASE"
          - label: "IBM DB2"
            value: "IBM DB2"
          - label: "Microsoft SQL Server"
            value: "Microsoft SQL Server"
          - label: "Greenplum"
            value: "Greenplum"
          - label: "Apache Cloudberry"
            value: "Apache Cloudberry"
          - label: "MySQL / MariaDB"
            value: "MySQL / MariaDB"
          - label: "Other"
            value: "Other"

    - label: "Project Type"
      name: "Project Type"
      value: "New Project"
      type: "radio"
      group: "Project Type"
      groupLabel: "What type of assistance do you need?"
      checked: true
      halfWidth: true

    - label: "Existing Environment"
      name: "Project Type"
      value: "Existing Environment"
      type: "radio"
      group: "Project Type"
      halfWidth: true

    - label: "Describe Your Requirements"
      name: "Message"
      placeholder: "Tell us about your database environment, challenges, project scope and requirements."
      tag: "textarea"
      rows: "5"
      required: true

    - label: "I agree to be contacted regarding this enquiry."
      name: "Consent"
      value: true
      type: "checkbox"
      required: true

    - note: success
      parentClass: "hidden text-sm message success"
      content: "Thank you for contacting One13Tech. We have received your enquiry."

    - note: deprecated
      parentClass: "hidden text-sm message error"
      content: "We could not submit your enquiry. Please try again or contact itservices@one13tech.com."
---
