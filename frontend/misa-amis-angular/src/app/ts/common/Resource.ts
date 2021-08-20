var Resource:any = Resource || {};

/**
 * Data type
 */
Resource.DataTypeColumn = {
    Number: "Number",
    Date: "Date",
    Enum: "Enum",
    Email: "Email",
    Name: "Name",
    DateForm: "DateForm"
}

/**
 * Gender
 */
Resource.Gender = {
    Male: "Nam",
    Female: "Nữ",
    Other: "Khác"
}

/**
 * Work status
 */
Resource.WorkStatus = {
    Active: "Đang làm việc",
    Intern: "Đang thử việc",
    Retired: "Đã nghỉ việc"
}

/**
 * Form type
 */
Resource.FormType = {
    Add: "Add",
    Edit: "Edit",
    Delete: "Delete",
    Refresh: "Refresh"
}

/**
 * State date
 */
Resource.StateDate = {
    InValid: 'Invalid Date'
}

/**
 * Duplicate type
 */
Resource.DuplicateType = {
    EmployeeCode: "employeeCode",
    Email: "Email"
}

/**
 * Change page size
 */
Resource.pageChange = {
    Previous: 'Previous',
    Behind: 'Behind'
}

/**
 * Lable
 */
Resource.FormatLable = {
    Address: 'address',
    BankAccountNumber: 'bankAccountNumber',
    BankBranchName: 'bankBranchName',
    BankName: 'bankName',
    BankProvinceName: 'bankProvinceName',
    CreatedBy: 'createdBy',
    CreatedDate: 'createdDate',
    DateOfBirth: 'dateOfBirth',
    DepartmentId: 'departmentId',
    DepartmentName: 'departmentName',
    Email: 'email',
    EmployeeCode: 'employeeCode',
    EmployeeId: 'employeeId',
    EmployeeName: 'employeeName',
    EmployeePosition: 'employeePosition',
    Gender: 'gender',
    IdentityDate: 'identityDate',
    IdentityNumber: 'identityNumber',
    IdentityPlace: 'identityPlace',
    ModifedBy: 'modifedBy',
    ModifedDate: 'modifedDate',
    PhoneNumber: 'phoneNumber',
    TelephoneNumber: 'telephoneNumber'
}

/**
 * Lable format
 */
Resource.LableName = {
    Address: 'ĐỊA CHỈ',
    BankAccountNumber: 'TÀI KHOẢN NGÂN HÀNG',
    BankBranchName: 'TÊN CHI NHÁNH',
    BankName: 'TÊN NGÂN HÀNG',
    BankProvinceName: 'TÊN TỈNH NGÂN HÀNG',
    CreatedBy: 'TẠO BỞI',
    CreatedDate: 'NGÀY TẠO',
    DateOfBirth: 'NGÀY SINH',
    DepartmentId: 'MÃ PHÒNG BAN',
    DepartmentName: 'TÊN PHÒNG BAN',
    Email: 'EMAIL',
    EmployeeCode: 'MÃ NHÂN VIÊN',
    EmployeeId: 'ID NHÂN VIÊN',
    EmployeeName: 'TÊN NHÂN VIÊN',
    EmployeePosition: 'CHỨC VỤ',
    Gender: 'GIỚI TÍNH',
    IdentityDate: 'NGÀY CẤP',
    IdentityNumber: 'MÃ CMND',
    IdentityPlace: 'NƠI CẤP CMND',
    ModifedDate: 'NGÀY SỬA',
    ModifedBy: 'SỬA BỞI',
    PhoneNumber: 'ĐIỆN THOẠI DI ĐỘNG',
    TelephoneNumber: 'ĐIỆN THOẠI CỐ ĐỊNH'
}

/**
 * lable input
 */
Resource.LableInput = {
    Address: 'Địa chỉ',
    BankAccountNumber: 'Tài khoản ngân hàng',
    BankBranchName: 'Chi nhánh',
    BankName: 'Tên ngân hàng',
    DateOfBirth: 'Ngày sinh',
    DepartmentId: 'Đơn vị',
    Email: 'Email',
    EmployeeCode: 'Mã nhân viên',
    EmployeeName: 'Họ và tên',
    EmployeePosition: 'Chức danh',
    IdentityDate: 'Ngày cấp',
    IdentityNumber: 'Số CMTND/ Căn cước',
    IdentityPlace: 'Nơi cấp',
    PhoneNumber: 'ĐT di động',
    TelephoneNumber: 'ĐT cố định'
}

/**
 * title form
 */
Resource.TitleForm = {
    Notification: 'Dữ liệu đã bị thay đổi. Bạn có muốn cất không?',
    AddSuccess: 'Thêm dữ liệu thành công',
    AddError: 'Thêm dữ liệu thất bại',
    EditSuccess: 'Sửa dữ liệu thành công',
    EditError: 'Sửa dữ liệu thất bại',
    DelSuccess: 'Xóa dữ liệu thành công',
    DelError: 'Xóa dữ liệu thất bại',
    FormatError: 'không đúng định dạng',
    Duplicate: 'đã tồn tại trong hệ thống, vui lòng kiểm tra lại.',
    NotNull: 'không được để trống.',
    FullField: 'Vui lòng điền ',
    EditForm: 'Sửa thông tin nhân viên',
    AddForm: 'Thêm thông tin nhân viên',
    DeleteEmployee: 'Bạn có thực sự muốn xóa Nhân viên',
    NoRequire: ' không?',
    Employee: 'Nhân viên',
    NoDuplicate: 'không tồn tại, vui lòng thử lại sau?',
    FormatNumber: 'Vui lòng nhập đúng định dạng chỉ gồm số',
    ErrorMISA: 'Có lỗi xảy ra vui lòng liên hệ MISA',
    DepartmentName: 'Chọn vị trí phòng ban',
    AddErrPopup: 'Thêm dữ liệu thất bại, xin vui lòng thử lại sau',
    EditErrPopup: 'Sửa dữ liệu thất bại, xin vui lòng thử lại sau',
    ImportNull: 'Số bản ghi được nhập khẩu: 0'

}

/**
 * title button
 */
Resource.TitleBtn = {
    Close: 'Đóng',
    Cancel: 'Hủy',
    No: 'Không',
    Yes: 'Có',
    Confirm: 'Đồng ý',
}

/**
 * page size
 */
Resource.PageSize = {
    Ten: '10 bản ghi trên 1 trang',
    Twenty: '20 bản ghi trên 1 trang',
    Thirty: '30 bản ghi trên 1 trang',
    Fifty: '50 bản ghi trên 1 trang',
    OneHdr: '100 bản ghi trên 1 trang',
}

/**
 * tooltip
 */
Resource.Tooltip = {
    Refresh: 'Lấy lại dữ liệu',
    Export: 'Xuất ra excel',
}

Resource.FormatExcel = {
    WorlSheetName: 'Employee',
    FileName: 'Danh_sách_nhân_viên.xls'
}


export default Resource;