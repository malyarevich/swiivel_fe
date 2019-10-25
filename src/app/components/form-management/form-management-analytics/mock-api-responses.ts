export const mockAnalyticsDashboardResponse = {
    "data": {
        "name": "New Jersey test dont touch pls",
        "status": "closed",
        "dashboard_block": {
            "round": {
                "name": "Round 2",
                "start_date": "Oct 10, 2019",
                "end_date": "Oct 15, 2019",
            },
            "last_updated": {
                "avatar": null,
                "full_name": "Adam Doe",
                "role_name": "Admin",
                "date": "Oct 19, 2019 12:44 pm"
            },
            "created": {
                "avatar": null,
                "full_name": "Adam Doe",
                "role_name": "Admin",
                "date": "Oct 07, 2019 06:45 pm"
            },
            "access": []
        },
        "analytics": {
            "circle_graph": {
                "total": 21,
                "reviewed_completed": 10
            },
            "status_numbers": {
                "not_started": 21,
                "send_out": 0,
                "in_progress": 0,
                "incomplete": 0,
                "submitted": 0,
                "reviewed_completed": 0
            }
        },
        "payments": []
    },
    "status": 1
};

export const mockLogListResponse = {
    "data": {
        "data": [
            {
                "created_at": "09/25/2019 1:27 pm",
                "user": {
                    "id": 1,
                    "full_name": "Adam Doe",
                    "role": {
                        "id": 1,
                        "role_name": "Admin"
                    },
                    "avatar": null
                },
                "action": "updated"
            },
            {
                "created_at": "09/25/2019 1:26 pm",
                "user": {
                    "id": 1,
                    "full_name": "Adam Doe",
                    "role": {
                        "id": 1,
                        "role_name": "Admin"
                    },
                    "avatar": null
                },
                "action": "created"
            }
        ],
        "page": 1,
        "last_page": 1,
        "count": 2,
        "limit": 15,
        "total": 2
    },
    "status": 1
};