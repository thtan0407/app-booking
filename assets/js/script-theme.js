$(document).ready(function () {
    // Start
    // --- Navigation

    _navigation = () => {
        if ($('#main').is('.open')) {
            $('#main').removeClass('open');
        } else {
            $('#main').addClass('open');
        }
    };

    if ($('#humburger').length > 0) {
        $('#humburger').click(function () {
            _navigation();
        });
    }

    if ($('#closeNavigation').length > 0) {
        $('#closeNavigation').click(function () {
            _navigation();
        });
    }

    $(document).on("mouseup", function (e) {
        let o = $("#navigation");
        o.is(e.target) || 0 !== o.has(e.target).length
        || (
            $('#main').removeClass("open")
        )
    });

    // --- Navigation
    // End

    // Start
    // --- Call Modal - Noted

    $('.callNoted').click(function (e) {
        e.preventDefault();
        let id = $(this).data('id');
        $('#modalNoted').modal('show');
    })

    // --- Call Modal - Noted
    // End


    // Start
    // Preloader
    setTimeout(function () {
        $('#preloader').hide();
    }, 2000);

    // Do đang test nên tốc độ load script gần như bằng 0, nên hàm setTimeout em set 2000ms để show preloader
    // Khi web chạy ok, gắn script hoàn toàn thì anh xóa thời giam ở setTimeout nha

    // Preloader
    // End
});