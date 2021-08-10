import React from "react";

export default class LoginTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {logins: []};
    }

    componentDidMount() {
        // TODO: get rid og the mock logins and use the logins from the backend
        this.loadMockLogins()
        //this.loadLogins()
    }

    loadMockLogins() {
        setTimeout(() => {
            this.setState({
                logins: [
                    {
                        "_id": "6112aa5751265d69cf217ea1",
                        "madeBy": "6112a7040f5eae66e722c61d",
                        "datetime": "2021-08-10T16:33:27.152Z",
                        "__v": 0
                    },
                    {
                        "_id": "6112b5e85bff7e6b571502bd",
                        "madeBy": "6112a7040f5eae66e722c61d",
                        "datetime": "2021-08-10T17:22:48.758Z",
                        "__v": 0
                    }
                ]
            })
        }, 1000)
    }

    loadLogins() {

        fetch('/api/users/logins/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                if (response.status === 200) {
                    return response.json();
                } else {
                    throw new Error('Network response was not ok');
                }
            })
            .then(data => {

                // TODO: put content in the state using setState, as in the mock data function

            })
            .catch((error) => {
                alert("Impossible to get logins log");
            });
    }

    formatRows() {

        const dates = {};
        this.state.logins.forEach((login) => {
            console.log(login);
            const key = new Date(login.datetime).toLocaleDateString();
            if (! dates[key]) {
                dates[key] = 1;
            } else {
                dates[key]++;
            }
        });

        const finalListItems = []
        for (const [date, count] of Object.entries(dates)) {
            finalListItems.push(<tr>
                <td>
                    {date}
                </td>
                <td>
                    {count} {count?'logins':'login'}
                </td>
            </tr>)
        }
        return finalListItems;
    }

    render() {
        return (<table>{this.formatRows()}</table>);
    }

}
