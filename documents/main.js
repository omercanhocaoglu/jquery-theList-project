$(document).ready(function () {
    const uid = "id" + Math.random().toString(16).slice(2)

    $("#getList").click( (e) =>  {
        const baseURL = "http://localhost:3000";
        const tablePost = $("#tablePost");
        $.ajax({
            method: "GET",
            url: baseURL+"/posts",
        }).done( (data) => {
            for( let i=0; i<20; i++ ){
                let trHtml = "";
                trHtml+=`
                <tr>
                    <th scope="row">${data[i].id}</th>
                    <td>${data[i].name}</td>
                    <td>${data[i].surname}</td>
                </tr>
                `;
                tablePost.append(trHtml);
                e.preventDefault();
            }
        } ).fail( () => {
            alert("Data fetch hasn't done now please try again!")
        } );
    } );

    $("#postList").click( (e) => {
        const baseURL = "http://localhost:3000";
        const tablePost = $("#tablePost");
        event.preventDefault();
        $.ajax({
            method: "POST",
            url: baseURL+"/posts",
            data: {
                "id": uid,
                "name": $("#postName").val(),
                "surname": $("#postSurname").val()
            }
        }).done( (data) => {
            for( let i=0; i<20; i++ ){
                let trHtml = "";
                trHtml+=`
                <tr>
                    <th scope="row">${data[i].id}</th>
                    <td>${data[i].name}</td>
                    <td>${data[i].surname}</td>
                </tr>
                `;
                tablePost.append(trHtml);
                e.preventDefault();
            }
        } ).fail( () => {
            alert("Data fetch hasn't done now please try again!")
        } );
    } );
});


