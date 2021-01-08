
import swal from 'sweetalert2';

export function swalPreguntar(modo:string, app:string, id=0){
    return new Promise((resolve)=>{
        swal.fire({
            title:
            `<i class="fa  fa-warning text-warning swal-title-icon"></i> <span class="swal-title">${modo}</span>`,
            html:
            `<span class='swal-text'>¿Está seguro que desea ${modo} ${app}?</span>`,
            // width: "350px",
            icon: 'warning',
            padding: 10,
            showCancelButton: true,
            confirmButtonColor: "#D32C53",
            cancelButtonColor: "#57889c",
            confirmButtonText: "Sí",
            cancelButtonText: "No",
        }).then((result) => {
            if (result.value) {
                resolve(true)
            }
          });
    })
}