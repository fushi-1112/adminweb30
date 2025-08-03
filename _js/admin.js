function saveProduct() {
  const name = document.getElementById('productName').value.trim();
  const stock = document.getElementById('productStock').value;

  if (!name || stock === '') {
    alert('กรุณากรอกข้อมูลให้ครบถ้วน');
    return; 
  }

 
  alert('เพิ่มสินค้าเรียบร้อย!');
  

}