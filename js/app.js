$(document).ready(function() {

     function Image(image) {
      this.image_url = image.image_url;
      this.title = image.title;
      this.horns=image.horns;
      this.description=image.description;
      this.keyword=image.keyword;


 }




      Image.prototype.render = function() {
        let $imageClone = $("#photo-template").clone().addClass(this.keyword);
        $imageClone.find("h2").text(this.title);
        $imageClone.find("img").attr("src", this.image_url );
  
        $imageClone.find("p").text(this.description);
      //  $imageClone.find("h3").text(" number of horns : " ,  this.horns);
  
        // $dogClone.removeClass("dog-template");
        $imageClone.removeAttr("id");
        $imageClone.attr("id", this.title);
        $("main").append($imageClone);
     };








      
 let option = [];

     Image.prototype.makeOption = function () {
     if (!(option.includes(this.keyword))) {
        option.push(this.keyword)
        let new_option = '<option>' + this.keyword + '</option>'
        $('select').append(new_option)
     }

     };



   
 const readJson = () => {
      $.ajax("data/page-1.json", { method: "GET", dataType: "JSON" }).then(data => {
        data.forEach(imageItem => {
          let obj = new Image(imageItem);
          obj.render();
          obj.makeOption();
        });
      });
     };
 readJson();



 $('#choice').change(function () {
    var new_select = $(this).children("option:selected").val();
    $('div').each(function () {
        if ($(this).attr('class') === new_select) {
            $(this).css('display', 'block')
        } else {
            $(this).css('display', 'none')
        }       
    })
 })










 });
  
  
































  