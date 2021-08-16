using MISA.ApplicationCore.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MISA.ApplicationCore.Interfaces.Repository
{
    /// <summary>
    /// Interface repository danh mục đơn vị phòng ban
    /// </summary>
    /// CreatedBy: PQ Huy (06.07.2021)
    public interface IDepartmentRepository : IBaseRepository<Department>
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
