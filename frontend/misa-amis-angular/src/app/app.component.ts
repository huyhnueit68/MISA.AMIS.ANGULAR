import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
  
export class AppComponent {
  title = 'misa-amis-angular';

  /**
   * list items for menu nav bar
   */
  public navBarItems = Array();


  ngOnInit() {
    this.navBarItems = [
        {
          c_icon: "icon-dashboard",
          m_title: "Tổng quan",
          m_router: "",
        },
        {
          c_icon: "icon-cash",
          m_title: "Tiền mặt",
          m_router: "employee",
        },
        {
          c_icon: "icon-deposits",
          m_title: "Tiền gửi",
          m_router: "deposits",
        },
        {
          c_icon: "icon-purchase",
          m_title: "Mua hàng",
          m_router: "purchase",
        },
        {
          c_icon: "icon-sell",
          m_title: "Bán hàng",
          m_router: "sell",
        },
        {
          c_icon: "icon-bill",
          m_title: "Quản lý hóa đơn",
          m_router: "bill",
        },
        {
          c_icon: "icon-warehouse",
          m_title: "Kho",
          m_router: "warehouse",
        },
        {
          c_icon: "icon-tools",
          m_title: "Công cụ dụng cụ",
          m_router: "tools",
        },
        {
          c_icon: "icon-assets",
          m_title: "Tài sản cố định",
          m_router: "assets",
        },
        {
          c_icon: "icon-tax",
          m_title: "Thuế",
          m_router: "tax",
        },
        {
          c_icon: "icon-price",
          m_title: "Giá thành",
          m_router: "price",
        },
        {
          c_icon: "icon-synthetic",
          m_title: "Tổng hợp",
          m_router: "synthetic",
        },
        {
          c_icon: "icon-budget",
          m_title: "Ngân sách",
          m_router: "budget",
        },
        {
          c_icon: "icon-report",
          m_title: "Báo cáo",
          m_router: "report",
        },
        {
          c_icon: "icon-analysis",
          m_title: "Phân tích tài chính",
          m_router: "analysis",
        }
    ]
  }
}
