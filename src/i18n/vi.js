export default {
    pos: {
      configuration: 'Tùy chỉnh',
      dashboard: {
        monthly_revenue: 'Doanh thu hàng tháng',
      }, // dashboard
      language: 'Ngôn ngữs',
      search: 'Tìm kiếm',
    },
    resources: {
      branchs: {
        name: 'Chi nhánh',
        fields: {
          address: "Địa chỉ",
          deputy: "Người đại diện",
          fax: "Fax",
          income: "Doanh thu",
          name: "Tên chi nhánh",
          note:'Ghi chú',
          phone: "Số điện thoại",
        }, // fields
    }, // branchs
    members: {
      name: 'Thành viên',
      fields: {
        birthday: "Sinh nhật",
        date_from: "Sinh nhật từ",
        date_to: "Sinh nhật đến",
        name: "Họ tên",
        note:'Ghi chú',
        phone: "Điện thoại",
        source_id: "Nguồn khách",
        source_individual: "Khách lẻ",
        source_introduce: "Người giới thiệu",
      }, // fields
    }, // members
    packages: {
      name: 'Gói tập',
      fields: {
        amount: "Số tiền",
        branch_id:"Chi nhánh",
        form_id: "Hình thức",
        form_month: "Tập tháng",
        form_session: "Tập buổi",
        name: "Tên gói",
        number: "số lượng",
        note: "Ghi chú",
      }, // fields
    }, // packages
    rooms: {
      name: 'Phòng tập',
      fields: {
        acreage:"Diện tích phòng",
        branch_id:"Chi nhánh",
        empty:"Đang trống",
        name:"Tên phòng",
        note:'Ghi chú',
        status_id:'Trạng thái',
        status_invalid:"Trạng thái không đúng",
        unused:"Không sử dụng",
        used:"Đã sử dụng",
      }, // fields
    }, // rooms
    sessions: {
      name: 'Buổi tập',
      fields: {
        branch_id:"Chi nhánh",
        friday:"Thứ 6",
        monday:"Thứ 2",
        name:"Tên buổi",
        note:'Ghi chú',
        room_id:"Phòng",
        saturday:"Thứ 7",
        sunday:"Chủ nhật",
        title:"Buổi tập",
        thursday:"Thứ 5",
        tuesday:"Thứ 3",
        wednesday:"Thứ 4",
      }, // fields
    }, // sessions
  }, // resources
}; // export
