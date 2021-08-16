using Dapper;
using Microsoft.AspNetCore.Http;
using MISA.ApplicationCore.Entities;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace MISA.AMIS.Web.Middwares
{
    public class ErrorHandlingMiddleware
    {
        private readonly RequestDelegate next;

        public ErrorHandlingMiddleware(RequestDelegate next)
        {

            this.next = next;
        }

        #region Method
        public async Task Invoke(HttpContext context)
        {
            try
            {
                await next(context);
            }
            catch (Exception ex)
            {
                await HandleExceptionAsync(context, ex);
            }
        }

        private static Task HandleExceptionAsync(HttpContext context, Exception ex)
        {
            var code = HttpStatusCode.InternalServerError;

            var result = JsonConvert.SerializeObject(
                new ServiceResult
                {
                    Data = ex,
                    Messenger = "Có lỗi xảy ra, vui lòng liên hệ MISA",
                    MISACode = ApplicationCore.Enums.MISAEnum.NotValid
                });

            context.Response.ContentType = "application/json";
            context.Response.StatusCode = (int)code;

            return context.Response.WriteAsync(result);
        }
        #endregion
    }
}
