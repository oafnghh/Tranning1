$(document).ready(function(){
    var student = [
        {"name":"Nguyễn Văn N","age":28},
        {"name":"Nguyễn Văn H","age":19},
        {"name":"Nguyễn Văn K","age":25},
        {"name":"Nguyễn Văn A","age":20},
        {"name":"Nguyễn Văn B","age":21}
    ];

    function showTable(data) {
        var html = '';
        data.forEach(function(student) {
            html += '<tr class="student-row" data-name="' + student.name + '">';
            html += '<td>' + student.name + '</td>';
            html += '<td>' + student.age + '</td>';
            html += '</tr>';
        });
        $('#student_data').html(html);
    }
    showTable(student);
    //-------------------------------------------------
    $('#btn_search_reset').click(function(){
        showTable(student);
    });
    //-------------------------------------------------
    $('#btn_search_number').click(function(){
        var text = $("#numberSearch").val();
        var showSearch = student.filter(function(std) {
            return std.age >= text;
        });
        showTable(showSearch);
    });
    //-------------------------------------------------
    function sortTable(n) {
        var rows = $('#student_data tr').get();
        rows.sort(function(a, b) {
            var A = $(a).children('td').eq(n).text().toUpperCase();
            var B = $(b).children('td').eq(n).text().toUpperCase();
            if (n === 1) {
                return parseInt(A) - parseInt(B);
            } else {
                return (A < B) ? -1 : (A > B) ? 1 : 0;
            }
        });
        $.each(rows, function(index, row) {
            $('#student_data').append(row);
        });
    }
    $('#ta_student th').click(function(){
        var index = $(this).index();
        sortTable(index);
    });
    //-------------------------------------------------
    $('#btn_search_string').click(function(){
        var text = $("#textSearch").val().toLowerCase(); 
        if(text =="")
            {
                alert("Chưa nhập chữ")
            }
            else{
                var showSearch = student.filter(function(std) {
                    return std.name.toLowerCase().includes(text);
                });
                showTable(student);
                $('.student-row').each(function() {
                    var studentName = $(this).attr('data-name').toLowerCase();
                    if (studentName.includes(text)) {
                        $(this).css('background-color', 'red');
                    } else {
                        $(this).css('color', '');
                    }
                });
            }
    });
});