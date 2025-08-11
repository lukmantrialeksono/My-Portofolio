<?php
if($_SERVER["REQUEST_METHOD"]=="POST"){
    $nama = $_POST ['nama'];
    $email = $_POST ['email'];
    $pesan = $_POST ['pesan'];

    $to = "lukmantl216@gmail.com";//Email tujuan
    $subject = "Pesan baru dari website";
    $body = " Nama:$nama\nEmail:$email\nPesan:$pesan";
    $headers ="from: $email";

    if (mail($to,$subject,$body,$headers)){

        echo "Pesan berhasil dikirim";
    }else {
        echo "Gagal mengirim pesan";
    }
}
?>