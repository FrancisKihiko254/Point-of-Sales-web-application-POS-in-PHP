<?php require_once('include/session.php') ?>
<?php require_once('include/functions/customer.php')?>
<?php require_once('include/functions/sales.php')?>
<?php// require_once('include/functions/category.php')?>
<?php require_once('include/functions/preveleges.php')?>
<?php
$role_ID=$user_role;
$privilege_ID='Manage Sales';
 $getpres=getRolePrivilegesByRoleAndPrivilegesName($role_ID,$privilege_ID);// This Function can be found on include/function/config.php 
if ($getpres !=1) {
//require('access_denied.php');
echo '<script> window.location="access_denied" </script>';
exit();
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
  
  <?php require_once('include/head.php')?>
</head>
<body class="hold-transition sidebar-mini layout-fixed">
<div class="wrapper">

  <!-- Preloader -->
  <!--<div class="preloader flex-column justify-content-center align-items-center">
    <img class="animation__shake" src="../favicon.png" alt="Logo" height="60" width="60">
  </div>-->

  <!-- Navbar -->
 <?php require_once('include/top_nav.php')?>
  <!-- /.navbar -->

  <!-- Main Sidebar Container -->
  <aside class="main-sidebar sidebar-light-success elevation-4" style="color:white">
    <!-- Brand Logo -->
    <?php require_once('include/side_menu.php')?>
    <!-- /.sidebar -->
  </aside>

  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
   

    <!-- Main content -->
    <section class="content">
      <div class="container-fluid" >
        <!-- Small boxes (Stat box) -->

      <!--  <div class="row" style="padding-top: 15px;padding-bottom: 15px">
           <div class="col-md-12">
             <button type="submit" name="submit" class="btn btn-info" style="background-color: ;color: white">
              <a href="add_product" style="color:#fff"><i class="nav-icon fas fa-plus"></i> Add product</a></button>
           
              <br>
              
          </div>
        </div>-->
        
        <div class="row">
          
          
          <div class="col-md-12">
              <div class="card">
              <div class="card-header">
                <h3 class="card-title" style="color: #17A589;font-size:"><i class="nav-icon fas fa-hospital"></i> MANAGE SALES</h3>
              </div>
           
              <!-- /.card-header -->
              <div class="card-body table-responsive p-0">
                <br>
                <table id="example1" class="table table-bordered table-striped text-nowrap " >
                <thead style="color:#17A589 ">
                  <tr>
                    <th class="all">#</th>
                    <th class="all">Invoice No</th>
                    <th class="all">Customer Name</th>
                    <th class="all">Date</th>
                    <th class="all">Total Amount</th>
                    <th class="all">Amount Paid</th>
                     <th class="all">Payment Method</th>
                     <th class="all">Status</th>
                    <th class="all"></th>
                  </tr>
                </thead>
                <tbody>
                     <?php
                      $getSales=getServiceSalesALL();
                      if ($getSales !=0) {
                        $x=0;
                        foreach ($getSales as $getSale ) {
                          $x++;?>
                           <tr>
                    <td><?php echo $x ?></td>
                    <td><?php echo $getSale->invoice_no ?></td>
                    <td>
                      <?php 
                      if($getSale->customer_ID =='WalkIn'){
                          echo 'Walking Customer';
                        }else{
                      $getCustomers=getcustomerByID($getSale->customer_ID) ;
                    if ($getCustomers !=0) {
                       foreach ($getCustomers as $getCustomer) {
                          echo $getCustomer->customer_name;
                       }
                    }
                  }
                    ?>
                      
                    </td>
                   
                    
                  <td><?php echo date('d/m/Y',strtotime($getSale->invoice_date))  ?></td>
                  <td><?php echo $getSale->total_amount ?></td>
                  <td><?php echo $getSale->paid_amount ?></td>
                  <td><?php echo $getSale->payment_method ?></td>
                  <td><?php echo $getSale->pay_status ?></td>
                  
                    <td class="text-right py-0 align-middle">
                      <div class="btn-group btn-group-sm">
                        <a href="invoice_service?guidID=<?php echo $getSale->sales_ID ?>" class="btn btn-success"><i class="fas fa-eye"></i></a>
                        <a href="edit_service_sale?guidID=<?php echo $getSale->sales_ID ?>&invoice_no=<?php echo $getSale->invoice_no ?>" class="btn btn-info"><i class="fas fa-edit"></i></a>
                        <a href="delete_service_sale?guidID=<?php echo $getSale->sales_ID ?>" onclick="return confirm('Are you sure you want to delete Sale?')" class="btn btn-danger"><i class="fas fa-trash"></i></a>
                      </div>
                    </td>
                  </tr>
                     <?php   }
                      }
                     ?>
                  

                </tbody>
              </table>
              </div>

            </div>
          </div>
        </div>
        <!-- /.row -->

        <!-- Main row -->
   
        <!-- /.row (main row) -->
      </div><!-- /.container-fluid -->
    </section>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->
  <footer class="main-footer">
    <strong>Copyright &copy; </strong>
    All rights reserved.
    <div class="float-right d-none d-sm-inline-block">
     
    </div>
  </footer>

  <!-- Control Sidebar -->
  <aside class="control-sidebar control-sidebar-dark">
    <!-- Control sidebar content goes here -->
  </aside>
  <!-- /.control-sidebar -->
</div>
<!-- ./wrapper -->

<!-- jQuery -->
<!-- jQuery -->

<?php require_once('include/footer.php') ?>
<script>
  $(function () {
    $("#example1").DataTable({
      "responsive": true, "lengthChange": false, "autoWidth": true,
      "buttons": ["copy", "csv", "excel", "pdf", "print"],
      "columnDefs" : [
        //hide the second & fourth column
        { 'visible': false, 'targets': [] }
    ],

    }).buttons().container().appendTo('#example1_wrapper .col-md-6:eq(0)');
    $('#example2').DataTable({
      "paging": true,
      "lengthChange": false,
      "searching": false,
      "ordering": true,
      "info": true,
      "autoWidth": true,
      "responsive": true,
    });
  });
</script>
<style type="text/css">
  .buttons{
    background-color: red;
  }
</style>
</body>
</html>
