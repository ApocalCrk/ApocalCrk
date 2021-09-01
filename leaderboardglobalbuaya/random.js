async function pengentau(){
      Swal.fire({
        title: 'Ga boleee ntar baper',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Lanjut la boi',
        cancelButtonText: 'Y',
        reverseButtons: true,
        allowOutsideClick: false
      }).then((result) => {
        if (result.isConfirmed) {
            lanjut()
        } else if (
          result.dismiss === Swal.DismissReason.cancel
        ) {
          Swal.fire({
            title: 'skippppppppp baperan',
            icon: 'warning',
            showConfirmButton: false,
            timer: 1000,
            allowOutsideClick: false
          })
        }
      })
}

async function lanjut(){
    let { value: text } = await Swal.fire({
        title: 'Silahkan isi formulir terlebih dahulu',
        input: 'text',
        inputLabel: 'Masukkan nama yang anda minati(skip di banned seumur hidup)',
        inputPlaceholder: 'Masukin oiii',
        allowOutsideClick: false,
        inputValidator: (value) => {
            return new Promise((resolve) => {
              if (value === 'ferdy' || value === 'Ferdy') {
                resolve()
              } else {
                resolve('Tidak Terdaftar HEYYYYYYY')
              }
            })
          }
      })

      if(text){
        let { value: number } = await Swal.fire({
            title: 'Seberapa yakin kamu sama tu bocah',
            icon: 'question',
            input: 'range',
            allowOutsideClick: false,
            inputLabel: text+': HAHAHAHAHAHAHA',
            inputAttributes: {
                min: 99,
                max: 100,
                step: 1
            },
            inputValue: 99
        })

        if(number){
            lanjut_lagi_boi()
        }
      }
}

async function lanjut_lagi_boi(){
    Swal.fire({
        title: 'Mau kontak nya nih?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'mau mau mau',
        allowOutsideClick: false,
        cancelButtonText: 'lamaaaa sok asik lu',
    }).then((result) => {
        if(result.isConfirmed) {
            Swal.fire({
                title: 'Kuat juga anda',
                text: 'mau lanjut nih',
                showCancelButton: true,
                confirmButtonText: 'iyaaa',
                cancelButtonText: 'lamaa heyyyyy',
                imageUrl: 'https://sweetalert2.github.io//images/nyan-cat.gif',
            }).then((result) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Website dalam maintenance silahkan chat admin jika ingin tahu lebih lanjut ehehehhehe',
                    showConfirmButton: false,
                    footer: '<a href="https://t.me/yoseeki">Kontak Admin</a>'
                  })
            })
            
        }else if (
            result.dismiss === Swal.DismissReason.cancel
          ) {
            Swal.fire({
              title: 'skipppp ga asik',
              text: 'minat masukin nama dalam leaderboard, silahkan kontak admin(harus pake duid)',
              icon: 'warning',
              showConfirmButton: false,
              timer: 5000,
              allowOutsideClick: false
            })
          }
    })
}

