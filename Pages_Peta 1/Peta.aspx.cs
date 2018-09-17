using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.UI.HtmlControls;
using System.Configuration;
using System.Collections;
using System.Data;
using System.Data.Sql;
using System.Data.SqlClient;
using System.IO;
using System.Web.Services;
using System.Text;
using System;

using System.Collections.Generic;
using System.Web.UI.WebControls;
using System.Web.Script.Serialization;
using System.Configuration;
using System.Web.Services;

public partial class Pages_Peta_Peta : System.Web.UI.Page
{
    string query;
    string user = "";
    string role = "";
    string kantor = "";
    protected String param1 = "";
    protected String output = "";
    Class_Bpn.Connection Eqry = new Class_Bpn.Connection();
    DataSet ds = new DataSet();
    DataTable dt;

    protected void Page_Load(object sender, EventArgs e)
    {
        FrameMap();
        bool normal = true;
        if (normal && (Request.Params["sm"] is object)) normal = ServiceSelect(Request.Params["sm"].ToString());
        
    }

    private String HakAkses()
    {
        output = "Sukses";

        if (!(Session["user"] is object))
        {
            output = "Login";
            return output;
        }

        return output;

    }

    private bool ServiceSelect(string sm)
    {
        switch (sm)
        {

            case "Akses":
                Response.ContentType = "text/plain";
                Response.Write(HakAkses());
                Response.End();
                return false;

            default:
                Response.ContentType = "text/plain";
                Response.End();
                return true;
        }
    }

    public void FrameMap()
    {        
		if (Session["user"] is object)
        {
			user = Session["user"].ToString();
            kantor = Session["Kantor"].ToString(); 
		}

        try
        {
            query = @"Select c.bps "
                    + "From users a, wilayahkantor b , mappingcode c"
                    + " Where username = '" + user + "' "
                    + " AND b.kantorid = '" + kantor + "' "
                    + " AND b.wilayahid = c.wilayahid";

            Eqry.ConSql("2");
            ds = Eqry.Lquery(query, "2");
            dt = ds.Tables[0];
            if (user == "197508192008041001" || user == "198205202008041001" || user == "198206022003121006"
                || user == "198806142011012005" || user == "dede")
            {
                urIframe.Attributes.Add("src", "http://103.49.37.56:81/bpn2015/admin.html");
            }

            else
            {
                if (dt.Rows.Count > 0)
                {
                    urIframe.Attributes.Add("src", "http://103.49.37.56:81/bpn2015/index.html?param=" + dt.Rows[0]["bps"].ToString());
                }

                else
                {

                    urIframe.Attributes.Add("src", "http://103.49.37.56:81/bpn2015/index.html?param=NewFile");

                }
            }
            dt.Dispose();

        }

        catch (Exception ex)
        {
            Response.Write("<script language=JavaScript>alert('"
                            + "Error :" + ex.Message
                            + "')</script>");
        }


    }

}