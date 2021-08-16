﻿using MISA.ApplicationCore.Entities;
using MISA.ApplicationCore.Interfaces.Repository;
using MISA.ApplicationCore.Interfaces.Service;
using System;
using System.Collections.Generic;

namespace MISA.ApplicationCore.Service
{
    public class DepartmentService : BaseService<Department>, IDepartmentService
    {
        #region DECLARE
        IDepartmentRepository _departmentRepository;
        #endregion

        #region Construct
        /// <summary>
        /// hàm khởi tạo cho department service
        /// </summary>
        /// <param name="departmentRepository"></param>
        /// CreatedBy: PQ Huy (06.07.2021)
        public DepartmentService(IDepartmentRepository departmentRepository) : base(departmentRepository)
        {
            _departmentRepository = departmentRepository;
        }

        #endregion

        #region Method
        /// <summary>
        /// Lấy thông tin theo tên phòng ban
        /// </summary>
        /// <param name="DepartmentName"> Tên phòng ban</param>
        /// <returns>Trả về bản ghi tương ứng</returns>
        /// CreatedBy: PQ Huy (21.07.2021)
        public IEnumerable<Department> GetByDepartmentName(string DepartmentName)
        {
            try
            {
                // gọi respository
                var departmentData = _departmentRepository.GetByDepartmentName(DepartmentName);

                // return value
                return departmentData;
            }
            catch (Exception)
            {
                throw;
            }
        }
        #endregion
    }
}
