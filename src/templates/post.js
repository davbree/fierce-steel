import React from 'react';
import _ from 'lodash';
import moment from 'moment-strftime';

import {Layout} from '../components/index';
import {htmlToReact, safePrefix} from '../utils';

export default class Post extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
              <article className="post post-full">
                <header className="post-header">
                  <h1 className="post-title underline">{this.props.pageContext.frontmatter.title}</h1>
                </header>
                {this.props.pageContext.frontmatter.subtitle && 
                <div className="post-subtitle">
                  {htmlToReact(this.props.pageContext.frontmatter.subtitle)}
                </div>
                }
                {this.props.pageContext.frontmatter.content_img_path && 
                <div className="post-thumbnail">
                  <img src={safePrefix(this.props.pageContext.frontmatter.content_img_path)} alt={this.props.pageContext.frontmatter.title} />
                </div>
                }
                <div className="post-content">
                  {htmlToReact(_.get(this.props, 'pageContext.html'))}
                </div>
                <footer className="post-meta">
                  <time className="published"
                    datetime={moment(_.get(this.props, 'pageContext.frontmatter.date')).strftime('%Y-%m-%d %H:%M')}>{moment(_.get(this.props, 'pageContext.frontmatter.date')).strftime('%A, %B %e, %Y')}</time>
                </footer>
              </article>
            </Layout>
        );
    }
}
