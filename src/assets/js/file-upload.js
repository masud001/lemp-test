
(function ($) {
    "use strict";

    $(".imgAdd").click(function () {
        $(this).closest(".row").find('.imgAdd').before('<div class="col-sm-2 imgUp"><div class="imagePreview"></div><label class="cust-file-upload-btn">Upload<input type="file" class="uploadFile img" value="Upload Photo" ></label><i class="fa fa-times del"></i></div>');
    });

    $(".videoAdd").click(function () {
        $(this).closest(".row").find('.videoAdd').before('<div class="col-sm-2 videoUp"><div class="videoPreview"></div><label class="cust-file-upload-btn">Upload<input type="file" class="uploadFile video" value="Upload Video" ></label><i class="fa fa-times del"></i></div>');
    });

    $(document).on("click", "i.del", function () {
        $(this).parent().remove();
    });
    $(function () {
        $(document).on("change", ".uploadFile", function () {
            var uploadFile = $(this);
            var files = !!this.files ? this.files : [];
            if (!files.length || !window.FileReader) return; // no file selected, or no FileReader support

            if (/^image/.test(files[0].type)) { // only image file
                var reader = new FileReader(); // instance of the FileReader
                reader.readAsDataURL(files[0]); // read the local file

                reader.onloadend = function () { // set image data as background of div
                    //alert(uploadFile.closest(".upimage").find('.imagePreview').length);
                    uploadFile.closest(".imgUp").find('.imagePreview').css("background-image", "url(" + this.result + ")");
                }
            }

        });
    });

    $(function () {
        $(document).on("change", ".uploadFile", function () {
            alert();
            var uploadFile = $(this);
            var files = !!this.files ? this.files : [];
            
            if(files != []) {
                jQuery(this).parent(".imgUp").addClass("active");
            } else {
                jQuery(this).parent(".imgUp").removeClass("active");
            }
            if (!files.length || !window.FileReader) return; // no file selected, or no FileReader support

            if (/^image/.test(files[0].type)) { // only image file
                var reader = new FileReader(); // instance of the FileReader
                reader.readAsDataURL(files[0]); // read the local file

                reader.onloadend = function () { // set image data as background of div
                    //alert(uploadFile.closest(".upimage").find('.imagePreview').length);
                    uploadFile.closest(".videoUp").find('.videoPreview').css("background-image", "url(" + this.result + ")");
                }
            }

        });
    });



})(jQuery);