using Dapper;
using Microsoft.Extensions.Configuration;
using MISA.ApplicationCore.Entities;
using MISA.ApplicationCore.Interfaces.Repository;
using MISA.Infrastructure;
using System;
using System.Collections.Generic;
using System.Data;

namespace MISA.Infastructure
{
    public class DepartmentRepository : BaseRepository<Department>, IDepartmentRepository
    {
        private IDbTransaction transaction;
        #region DECLARE

        #endregion

        #region Contructor
        public DepartmentRepository(IConfiguration configuration) : base(configuration)
        {

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
            using (var transaction = _dbConnection.BeginTransaction())
            {
                //khởi tạo các commandText
                var parameter = new DynamicParameters();
                parameter.Add("DepartmentName", DepartmentName);

                try
                {
                    var data = _dbConnection.Query<Department>($"Proc_GetDepartmentByName", parameter, commandType: CommandType.StoredProcedure, transaction: transaction);

                    //Commit lại transaction
                    transaction.Commit();

                    //Trả về dữ liệu
                    return data;
                }
                catch (Exception)
                {
                    // roll back lại transaction
                    transaction.Rollback();
                    throw;
                }

            }

                

            #endregion
        }
    }
}
