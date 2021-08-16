using Microsoft.AspNetCore.Mvc;
using MISA.ApplicationCore.Entities;
using MISA.ApplicationCore.Interfaces.Service;
using MISA.CukCuk.Web.Controllers;
using System;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MISA.AMIS.Web.Controllers
{
    /// <summary>
    /// Api Danh mục vị trí phòng ban
    /// CreatedBy: PQ Huy (05.07.2021)
    /// </summary>
    [Route("v1/[controller]")]
    [ApiController]
    public class DepartmentsController : BaseEntityController<Department>
    {
        #region DECLARE
        IDepartmentService _departmentService;
        #endregion

        #region Contructor
        public DepartmentsController(IDepartmentService departmentService) : base(departmentService)
        {
            _departmentService = departmentService;
        }
        #endregion

        #region Method

        // GET api/<EmployeesController>/3
        /// <summary>
        /// Lấy dữ liệu bản ghi theo name
        /// </summary>
        /// <returns>Trả về bản ghi với name tương ứng</returns>
        /// CreatedBy: PQ Huy (05.07.2021)
        [HttpGet("Name")]
        public IActionResult GetByName(string DepartmentName)
        {
            try
            {
                // gọi function lấy dữ liệu
                var data = _departmentService.GetByDepartmentName(DepartmentName);

                //trả về dữ liệu
                return Ok(data);
            }
            catch (Exception ce)
            {
                //trả về dữ liệu
                return BadRequest(ce);
            }

        }
        #endregion
    }
}
