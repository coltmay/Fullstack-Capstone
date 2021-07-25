using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Fullstack_Capstone.Controllers
{
    public class ResInstanceController : Controller
    {
        // GET: ResInstanceController
        public ActionResult Index()
        {
            return View();
        }

        // GET: ResInstanceController/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: ResInstanceController/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: ResInstanceController/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: ResInstanceController/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: ResInstanceController/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: ResInstanceController/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: ResInstanceController/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }
    }
}
