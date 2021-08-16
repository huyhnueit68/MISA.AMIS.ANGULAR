using MISA.ApplicationCore.Entities;
using System.Collections.Generic;

namespace MISA.ApplicationCore.Interfaces.Service
{
    /// <summary>
    /// Interface service danh mục đon vị phòng ban 
    /// </summary>
    /// CreatedBy: PQ Huy (06.07.2021)
    public interface IDepartmentService : IBaseService<Department>
    {
        /// <summary>
        /// Lấy thông tin theo tên phòng ban
        /// </summary>
        /// <param name="name"> Tên phòng ban</param>
        /// <returns>Trả về bản ghi tương ứng</returns>
        /// CreatedBy: PQ Huy (21.07.2021)
        IEnumerable<Department> GetByDepartmentName(string name);
    }
}
