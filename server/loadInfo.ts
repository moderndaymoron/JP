import { Employees }    from '../collections/employees.ts'

export function loadInfo() {
    if (Employees.find().count() === 0) {

        var staff = [
            {
                'name': 'Bilbo Jenkins',
                'description': 'Can we please just for an evening not listen to dubstep. and win some various stuff',
                'image': 'http://mohitpawar.com/wp-content/uploads/2010/10/unknown.jpg'
            },
            {
                'name': 'Magga majónes',
                'description': 'blonde pink/blue clothes',
                'image': 'https://pbs.twimg.com/profile_images/3189980168/3ca6a7e15d3765078e7326af58e0df7c_400x400.png'
            },
            {
                'name': 'Durotan McScuffage',
                'description': 'Can we please just for an evening not listen to dubstep.',
                'image': 'http://science-all.com/images/wallpapers/random-image/random-image-1.jpg'
            }
    ];

        for (var i = 0; i < staff.length; i++) {
            Employees.insert(staff[i]);
        }
    }
}
