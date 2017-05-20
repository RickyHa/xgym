export default {
    pos: {
      configuration: 'Configuration',
      dashboard: {
        monthly_revenue: 'Monthly Revenue',
      }, // dashboard
      language: 'Language',
      note:'Note',
      search: 'Search',
    },
    resources: {
      branchs: {
        name: 'Branchs',
        fields: {
          address: "Address",
          deputy: "Deputy",
          fax: "Fax",
          income: "Income",
          name: "Name",
          phone: "Phone",
        }, // fields
    }, // branchs
    members: {
      name: 'Members',
      fields: {
        birthday: "Birthday",
        date_from: "Birthday from",
        date_to: "Birthday to",
        name: "Full name",
        phone: "Phone",
        source_id: "Source",
        source_individual: "Individual guests",
        source_introduce: "Referrer",
      }, // fields
    }, // members
    packages: {
      name: 'Packages',
      fields: {
        amount: "Amount",
        branch_id: "Branch",
        form_id: "Form",
        form_month: "By Monthly",
        form_session: "By Session",
        name: "Name",
        number: "Number",
        note: "Note",
      }, // fields
    }, // packages
    rooms: {
      name: 'Rooms',
      fields: {
        acreage:"Acreage",
        branch_id: "Branch",
        empty:"Empty",
        name:"Room",
        status_invalid:"Status invalid",
        unused:"Unused",
        used:"Used",
      }, // fields
    }, // rooms
    sessions: {
      name: 'Sessions',
      fields: {
        branch_id: "Branch",
        friday:"Friday",
        room_id: "Room",
        monday:"Monday",
        name:"Session Name",
        saturday:"Saturday",
        sunday:"Sunday",
        thursday:"Thursday",
        tuesday:"Tuesday",
        wednesday:"Wednesday",
      }, // fields
    }, // sessions
  }, // resources
}; // export
