using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HajósTeszt.wwwroot
{
    [HttpGet]
    [Route("questions/count")]
    public int M4() 
    {
        HajostesztContext context = new HajostesztContext();
        int kérdésekSzáma = context.Questions.Count();

        return kérdésekSzáma;
    }
}
