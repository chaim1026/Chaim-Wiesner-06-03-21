import React from 'react';
import './directory.styles.scss';
import MenuItems from '../menu-items/menu-items.component';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [{
                id: 1,
                title: 'Items List',
                imageUrl: 'https://crystalcleanmovers.com/wp-content/uploads/2017/03/box-of-moving-items.jpg',
                linkUrl: '/items',
                icon: true
            },
            {
                id: 2,
                title: 'Stores List',
                imageUrl: 'https://img.freepik.com/free-vector/facade-store-cartoon-set-icon-illustration-storefront-white-background-isolated-cartoon-set-icon-facade-store_259641-89.jpg?size=626&ext=jpg',
                linkUrl: '/stores',
                icon: false
            }]
        }
    }

    render() {
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(({ id, ...otherSectionProps }) => (
                        <MenuItems key={id} {...otherSectionProps} />
                    ))
                }
            </div>
        )
    }
}

export default Directory;