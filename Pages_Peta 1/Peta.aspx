<%@ Page Title="" Language="C#" MasterPageFile="~/Pages_Master/MasterPage.master" AutoEventWireup="true" CodeFile="Peta.aspx.cs" Inherits="Pages_Peta_Peta" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">

<div class="container-fluid">
    <div class="side-body">

    <iframe id="urIframe" runat="server" width="100%" height="900"></iframe>

    </div>
</div>


<script type="text/javascript">

    var PostURL = "Peta.aspx";

    var LoginURL = "../Login.aspx";
    var HomeURL = "../Pages_Peta/Peta.aspx";
    Akses();

    function Akses(tipe) {

        var s = ""
                + "rnd=" + Math.random() * 4
			    + "&sm=Akses"
                + "&param1=V"
                //+ "&param2=" 
                + "";
        // Post Data Ajax Untuk Cek Akses Yang Di Miliki
        $.ajax({
            url: PostURL,
            data: s,
            //contentType: "application/json; charset=utf-8",
            type: 'POST',
            //dataType: 'json',
            success: function (response) {
                outputResponse(response);
            },
            error: function (e) {
                alert('Error Processing Your Request: ' + e.responseText);
            }
        });
    }

    function outputResponse(loader) {
        var a = loader;

        if (a != '') {
            var b = new Array();
            b = a.split('|');

        }
        else { b = ''; }
        switch (b[0]) {

            case "Login":
                alert("Session Sudah Habis. Silakan Login Kembali.");
                window.location.replace(LoginURL);
                break;

            case "NotAksi":
                alert("Tidak Ada Aksi Yang Di Temukan");
                window.location.replace(HomeURL);
                break;

            case "Akses":
                alert("Anda Tidak Memiliki Akses Untuk Aksi / Modul Ini");
                window.location.replace(HomeURL);
                break;

            case "gagal":
                alert("Tidak Bisa Melakukan Proses");
                break;

            default:
                break;
        }

    }

</script>

</asp:Content>

