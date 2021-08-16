using ClosedXML.Excel;
using Microsoft.Extensions.Configuration;
using MISA.ApplicationCore.Entities;
using MISA.ApplicationCore.Interfaces.Repository;
using MISA.ApplicationCore.Interfaces.Service;
using OfficeOpenXml;
using OfficeOpenXml.Style;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Threading;

namespace MISA.ApplicationCore.Service
{
    public class EmployeeService : BaseService<Employee>, IEmployeeService
    {
        #region DECLARE
        IEmployeeRepository _employeeRepository;
        IConfiguration _configuration;
        #endregion

        #region Construct
        /// <summary>
        /// hàm khởi tạo cho employee service
        /// </summary>
        /// <param name="employeeRepository"></param>
        /// CreatedBy: PQ Huy (05.07.2021)
        public EmployeeService(IEmployeeRepository employeeRepository, IConfiguration configuration) : base(employeeRepository)
        {
            _employeeRepository = employeeRepository;
            _configuration = configuration;
        }

        #endregion

        #region Method
        /// <summary>
        /// Hàm lấy ra mã nhân viên mới nhất
        /// </summary>
        /// <returns>Trả về mã nhân viên</returns>
        /// CreatedBy: PQ Huy (07.07.2021)
        public string GetNewEmployeeCode()
        {
            try
            {
                // Init new code and string for char
                var maxCode = _employeeRepository.GetMaxEmployeeCode();
                string letters = string.Empty;
                string numbers = string.Empty;

                // Plus each character
                foreach (char c in maxCode)
                {
                    if (Char.IsLetter(c))
                    {
                        letters += c;
                    }
                    if (Char.IsNumber(c))
                    {
                        numbers += c;
                    }
                }

                var newCode = $"NV-{Int32.Parse(numbers) + 1}";

                // return a string with new code
                return newCode;
            } catch(Exception)
            {
                throw;
            }
        }

        /// <summary>
        /// Hàm kiểm tra mã nhân viên có tồn tại trong
        /// </summary>
        /// <param name="code">mã nhân viên</param>
        /// <returns>Trả về true/false</returns>
        /// CreatedBy: PQ Huy (07.07.2021)
        public bool CheckEmployeeCodeExits(string code)
        {
            try
            {
                // Gọi đến repository
                var rowAffect = _employeeRepository.CheckEmployeeCodeExits(code);

                // Trả về boolen
                return rowAffect;
            } catch (Exception)
            {
                throw;
            }
        }

        /// <summary>
        /// Hàm lấy ra nhân viên theo email
        /// </summary>
        /// <param name="email">email nhân viên</param>
        /// <returns>Trả về bản ghi</returns>
        /// CreatedBy: PQ Huy (10.07.2021)
        public IEnumerable<Employee> GetByEmail(string email)
        {
            try
            {
                // gọi respository
                var employeeData = _employeeRepository.GetByEmail(email);

                // return value
                return employeeData;
            }
            catch (Exception)
            {
                throw;
            }
            
        }

        /// <summary>
        /// Hàm tính tổng nhân viên
        /// </summary>
        /// <returns>Trả về số nhân viên</returns>
        /// CreatedBy: PQ Huy (10.07.2021)
        public int GetEmployeeTotal()
        {
            try
            {
                // Get repositori total employee
                var count = _employeeRepository.GetEmployeeTotal();

                // Return value
                return count;
            }
            catch (Exception)
            {
                throw;
            }
            
        }

        /// <summary>
        /// Hàm pagding
        /// </summary>
        /// <param name="pageIndex">chỉ mục page</param>
        /// <param name="pageSize">kích thước page</param>
        /// <returns>Trả về tổng bản ghi và data pagding</returns>
        /// CreatedBy: PQ Huy (10.07.2021)
        public ServiceResult GetEmployeePaging(int pageIndex, int pageSize)
        {
            try
            {
                ServiceResult serviceResult = new ServiceResult();

                // Call repository
                var count = _employeeRepository.GetEmployeeTotal();

                // Get paging
                var resultEmployee = _employeeRepository.GetEmployeePaging(pageIndex, pageSize);

                // Push data
                serviceResult.Data = resultEmployee;
                serviceResult.Total = count;

                // Return value
                return serviceResult;
            }
            catch (Exception)
            {
                throw;
            }
            
        }

        /// <summary>
        /// Hàm lọc ra nhân viên theo paging
        /// </summary>
        /// <param name="pageIndex">indexx</param>
        /// <param name="pageSize">size</param>
        /// <param name="employeeFilter">giá trị lọc</param>
        /// <returns>Trả về bản ghi được filter</returns>
        /// CreatedBy: PQ Huy (10.07.2021)
        public ServiceResult GetEmployeeFilter(int pageIndex, int pageSize, string employeeFilter)
        {
            try
            {
                ServiceResult serviceResult = new ServiceResult();

                // Call repository
                var count = _employeeRepository.GetTotalFilter(employeeFilter);

                // Get paging
                var resultFilter = _employeeRepository.GetEmployeeFilter(pageIndex, pageSize, employeeFilter);

                // Push data
                serviceResult.Data = resultFilter;
                serviceResult.Total = count;

                // Return value
                return serviceResult;
            }
            catch (Exception)
            {
                throw;
            }
            
        }

        /// <summary>
        /// Lấy ra toàn bộ bản ghi được lọc
        /// </summary>
        /// <param name="employeeFilter">giá trị lọc</param>
        /// <returns>Trả về tất cả các bản ghi được filter</returns>
        /// CreatedBy: PQ Huy (10.07.2021)
        public ServiceResult GetEmployeeFilterAll(string employeeFilter)
        {
            try
            {
                ServiceResult serviceResult = new ServiceResult();

                // Call repository
                var count = _employeeRepository.GetTotalFilter(employeeFilter);

                // Get paging
                var resultFilter = _employeeRepository.GetEmployeeFilterAll(employeeFilter);

                // Push data
                serviceResult.Data = resultFilter;
                serviceResult.Total = count;

                // Return value
                return serviceResult;
            }
            catch (Exception)
            {
                throw;
            }
            
        }

        /// <summary>
        /// Đếm ra tổng bản ghi được lọc
        /// </summary>
        /// <param name="employeeFilter"> giá trị lọc</param>
        /// <returns>Trả về tổng số bản ghi được filter</returns>
        /// CreatedBy: PQ Huy (10.07.2021)
        public int GetTotalFilter(string employeeFilter)
        {
            try
            {
                // Get repositori total employee
                var count = _employeeRepository.GetTotalFilter(employeeFilter);

                // Return value
                return count;
            }
            catch (Exception)
            {
                throw;
            }
            
        }

        /// <summary>
        /// Hảm lấy ra giá trị theo property
        /// </summary>
        /// <param name="src">đối tượng cần get</param>
        /// <param name="propName">property name</param>
        /// <returns></returns>
        public static object GetValueByProperty(object src, string propName)
        {
            // lấy ra type property
            var propertyInfo = src.GetType().GetProperty(propName);

            if (propertyInfo.PropertyType == typeof(DateTime))
            {
                return new DateTime((long)src.GetType().GetProperty(propName).GetValue(src, null));
            }

            // trả về giá trị
            return src.GetType().GetProperty(propName).GetValue(src, null);
        }

        /// <summary>
        /// Hàm override custom validate
        /// </summary>
        /// <param name="employee">dữ liệu khách hàng</param>
        /// <param name="checkedResult">biến ghi log lỗia</param>
        /// <returns>Trả về true/false và log lại lỗi </returns>
        /// CreatedBy: PQ Huy (12.07.2021)
        protected override bool CustomValidate(Employee employee, List<string> checkedResult)
        {
            var isValid = true;

            return isValid;
        }

        /// <summary>
        /// Export dữ liệu
        /// </summary>
        /// <param name="cancellationToken"></param>
        /// <returns>Memmory stream</returns>
        /// CreatedBy: PQ Huy (15.07.2021)
        public MemoryStream Export(CancellationToken cancellationToken, string filterValue)
        {
            //Lấy ra danh sách nhân viên
            List<Employee> employees = new List<Employee>();

            // check value filter
            if (filterValue != null && filterValue != "")
            {
                employees = _employeeRepository.GetEmployeeFilterAll(filterValue).ToList();

            } else
            {
                employees = _employeeRepository.Get().ToList();
            }

            //Lấy ra danh sách cột cần xuất khẩu
            List<EmployeeExportColumn> exportColumns = _employeeRepository.GetEmployeeExportColumns().ToList();

            var stream = new MemoryStream();

            using (var package = new ExcelPackage(stream))
            {
                var worksheet = package.Workbook.Worksheets.Add("Sheet1");

                //Chỉnh header của excel
                /*worksheet.Cells[2, 1].Value = Properties.Resources.STT;*/
                worksheet.Cells[2, 1].Style.Font.Bold = true;
                worksheet.Cells[2, 1].Style.Fill.SetBackground(Color.LightGray); // set background color
                worksheet.Cells[2, 1].Style.Border.Top.Style = ExcelBorderStyle.Thin;
                worksheet.Cells[2, 1].Style.Border.Top.Color.SetColor(Color.Black);
                worksheet.Cells[2, 1].Style.Border.Left.Style = ExcelBorderStyle.Thin;
                worksheet.Cells[2, 1].Style.Border.Left.Color.SetColor(Color.Black);
                worksheet.Cells[2, 1].Style.Border.Right.Style = ExcelBorderStyle.Thin;
                worksheet.Cells[2, 1].Style.Border.Right.Color.SetColor(Color.Black);
                worksheet.Cells[2, 1].Style.Border.Bottom.Style = ExcelBorderStyle.Thin;
                worksheet.Cells[2, 1].Style.Border.Bottom.Color.SetColor(Color.Black);

                for (int i = 1; i <= exportColumns.Count; i++)
                {
                    // check type is date of birth
                    if (exportColumns[i - 1].FieldName == Properties.Resources.DateOfBirth)
                    {
                        worksheet.Column(i).Style.HorizontalAlignment = ExcelHorizontalAlignment.Center;
                    }
                    worksheet.Column(i).Width = exportColumns[i - 1].Width;
                    worksheet.Cells[2, i].Value = exportColumns[i - 1].DisplayName;
                    worksheet.Cells[2, i].Style.Font.Bold = true;
                    worksheet.Cells[2, i].Style.Fill.SetBackground(Color.LightGray);
                    worksheet.Cells[2, i].Style.Border.Top.Style = ExcelBorderStyle.Thin;
                    worksheet.Cells[2, i].Style.Border.Top.Color.SetColor(Color.Black);
                    worksheet.Cells[2, i].Style.Border.Left.Style = ExcelBorderStyle.Thin;
                    worksheet.Cells[2, i].Style.Border.Left.Color.SetColor(Color.Black);
                    worksheet.Cells[2, i].Style.Border.Right.Style = ExcelBorderStyle.Thin;
                    worksheet.Cells[2, i].Style.Border.Right.Color.SetColor(Color.Black);
                    worksheet.Cells[2, i].Style.Border.Bottom.Style = ExcelBorderStyle.Thin;
                    worksheet.Cells[2, i].Style.Border.Bottom.Color.SetColor(Color.Black);
                    worksheet.Column(i).Width = exportColumns[i - 1].Width;
                }
                for (int index = 1; index <= employees.Count; index++)
                {
                    //Màu header
                    /*worksheet.Cells[index + 3, 1].Value = index;*/
                    worksheet.Cells[index + 2, 1].Style.Border.Top.Style = ExcelBorderStyle.Thin;
                    worksheet.Cells[index + 2, 1].Style.Border.Top.Color.SetColor(Color.Black);
                    worksheet.Cells[index + 2, 1].Style.Border.Left.Style = ExcelBorderStyle.Thin;
                    worksheet.Cells[index + 2, 1].Style.Border.Left.Color.SetColor(Color.Black);
                    worksheet.Cells[index + 2, 1].Style.Border.Right.Style = ExcelBorderStyle.Thin;
                    worksheet.Cells[index + 2, 1].Style.Border.Right.Color.SetColor(Color.Black);
                    worksheet.Cells[index + 2, 1].Style.Border.Bottom.Style = ExcelBorderStyle.Thin;
                    worksheet.Cells[index + 2, 1].Style.Border.Bottom.Color.SetColor(Color.Black);
                    for (int i = 1; i <= exportColumns.Count; i++)
                    {
                        //Màu border
                        worksheet.Cells[index + 2, i].Style.Border.Top.Style = ExcelBorderStyle.Thin;
                        worksheet.Cells[index + 2, i].Style.Border.Top.Color.SetColor(Color.Black);
                        worksheet.Cells[index + 2, i].Style.Border.Left.Style = ExcelBorderStyle.Thin;
                        worksheet.Cells[index + 2, i].Style.Border.Left.Color.SetColor(Color.Black);
                        worksheet.Cells[index + 2, i].Style.Border.Right.Style = ExcelBorderStyle.Thin;
                        worksheet.Cells[index + 2, i].Style.Border.Right.Color.SetColor(Color.Black);
                        worksheet.Cells[index + 2, i].Style.Border.Bottom.Style = ExcelBorderStyle.Thin;
                        worksheet.Cells[index + 2, i].Style.Border.Bottom.Color.SetColor(Color.Black);
                        // Lấy ra trường giới tính và format lại 
                        if (exportColumns[i - 1].FieldName == Properties.Resources.Gender)
                        {
                            if (GetValueByProperty(employees[index - 1], exportColumns[i - 1].FieldName) is null)
                            {
                                worksheet.Cells[index + 2, i].Value = "";
                                continue;
                            }
                            switch (int.Parse(GetValueByProperty(employees[index - 1], exportColumns[i - 1].FieldName).ToString()))
                            {
                                case 0:
                                    worksheet.Cells[index + 2, i].Value = Properties.Resources.Male;
                                    break;
                                case 1:
                                    worksheet.Cells[index + 2, i].Value = Properties.Resources.Female;
                                    break;
                                default:
                                    worksheet.Cells[index + 2, i].Value = Properties.Resources.Other;
                                    break;
                            }
                            continue;
                        }
                        if (exportColumns[i - 1].FieldName == Properties.Resources.DateOfBirth)
                        {
                            if (GetValueByProperty(employees[index - 1], exportColumns[i - 1].FieldName) is null)
                            {
                                worksheet.Cells[index + 2, i].Value = "";
                                continue;
                            }

                            DateTime value = (DateTime)GetValueByProperty(employees[index - 1], exportColumns[i - 1].FieldName);

                            string convertDate = value.ToString("dd/M/yyyy", CultureInfo.InvariantCulture);
                            worksheet.Cells[index + 2, i].Value = convertDate;
                            continue;
                        }
                        worksheet.Cells[index + 2, i].Value = GetValueByProperty(employees[index - 1], exportColumns[i - 1].FieldName);
                    }
                }
                worksheet.Cells["A1:K1"].Merge = true;
                worksheet.Cells[1, 1].Value = Properties.Resources.ExcelTitle;
                worksheet.Cells[1, 1].Style.Font.Size = 16;
                worksheet.Cells[1, 1].Style.Font.Bold = true;
                worksheet.Cells[1, 1].Style.VerticalAlignment = ExcelVerticalAlignment.Center;
                worksheet.Cells[1, 1].Style.HorizontalAlignment = ExcelHorizontalAlignment.Center;
                /*worksheet.Cells["A2:K2"].Merge = true;*/

                package.Save();
            }
            stream.Position = 0;
            return stream;
        }


        #endregion
    }
}
